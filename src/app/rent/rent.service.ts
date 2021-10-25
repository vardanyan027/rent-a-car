import { Injectable,} from '@nestjs/common';
import {BadRequestException} from "../../exception/BadRequestException";
import {CreateRentDto} from './dto/createRent.dto';
import {RentRepository} from './repository/rent.repository';
import {TariffRepository} from '../tariff/repository/tariff.repository';
import {CarRepository} from '../car/repository/car.repository';
import {SettingsRepository} from "../setting/repository/settings.repository";
import {DiscountRepository} from "../discount/repository/discount.repository";
import {CreateRentEntityDto} from "./dto/createRentEntity.dto";
import {StatisticService} from "../statistic/statistic.service";
import {CreateStatisticDto} from "../statistic/dto/createStatistic.dto";
import {CreateStatisticRepositoryDto} from "../statistic/dto/createStatisticRepository.dto";
import {CreateStatisticAndRentDto} from "./dto/createStatisticAndRent.dto";

@Injectable()
export class RentService {
  constructor(
    private readonly rentRepository: RentRepository,
    private readonly tariffRepository: TariffRepository,
    private readonly carRepository: CarRepository,
    private readonly settingsRepository: SettingsRepository,
    private readonly discountRepository: DiscountRepository,
    private readonly statisticService: StatisticService
  ) {}

  async create(createRentDto: CreateRentDto) {
    try{
      const tariff = await this.tariffRepository.getById(createRentDto.tariff_id);
      const car = await this.carRepository.getById(createRentDto.car_id);
      const dateFrom = new Date(createRentDto.date_from);
      const dateTo = new Date(createRentDto.date_to);
      const maxRentDays = await this.settingsRepository.findMaxRentDays();
      const pauseBetweenRentalsByDays = await this.settingsRepository.findPauseBetweenRentalsByDays();
      const lastRent = await this.rentRepository.findLastRentForCarByCarId(
          car[0]['id'],
      );
      const discount = await this.discountRepository.findDiscountForRent(
         this.getDiffDays(dateTo, dateFrom),
          'when_booking_from_and_to'
      );
      const amount = tariff[0]['price'] * this.getDiffDays(dateTo, dateFrom);
      if (discount.length !== 0){
        var discounted_amount = amount * (100 - discount[0]['value']) / 100;
      }
      if (this.canDaysCorrect(dateFrom, dateTo)) {
        if (lastRent.length !== 0) {
          if (this.canCreateRentInThisDays(
              dateFrom,
              dateTo,
              new Date(lastRent[0]['date_to']),
              maxRentDays[0]['value'],
              pauseBetweenRentalsByDays[0]['value']
          )
          ) {
            let data = new CreateStatisticAndRentDto();
            data.car_id = car[0]["id"];
            data.tariff_id = tariff[0]["id"];
            data.date_from = dateFrom;
            data.date_to = dateTo;
            data.amount = amount;
            data.discounted_amount = discounted_amount;
            data.count = 1;
            return this.createStatisticAndRent(data);
          }
        }
        let data = new CreateStatisticAndRentDto();
        data.car_id = car[0]["id"];
        data.tariff_id = tariff[0]["id"];
        data.date_from = dateFrom;
        data.date_to = dateTo;
        data.amount = amount;
        data.discounted_amount = discounted_amount;
        data.count = 1;
        return this.createStatisticAndRent(data);
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public createStatisticAndRent(data: CreateStatisticAndRentDto) {
    if (this.canDaysCorrect(new Date(Date.now()), data.date_from)) {
      let dataRent = new CreateRentEntityDto();
      dataRent.car_id = data.car_id;
      dataRent.tariff_id = data.tariff_id;
      dataRent.date_from = data.date_from.toLocaleDateString();
      dataRent.date_to = data.date_to.toLocaleDateString();
      dataRent.amount = data.amount;
      dataRent.discounted_amount = data.discounted_amount;
      this.rentRepository.create(dataRent);
      let dataStatistic = new CreateStatisticDto();
      dataStatistic.car_id = data.car_id;
      dataStatistic.date_from = data.date_from;
      dataStatistic.date_to = data.date_to;
      dataStatistic.count = 1;
      this.statisticService.create(dataStatistic);
      return true;
    }
  }

  public canDaysCorrect(dateFrom: Date, dateTo: Date) {
    if (
        dateFrom <= dateTo
    ) {
      return true;
    }
    throw new BadRequestException();
  }

  public getDiffDays(bigDate: Date, shortDate: Date) {
    const timeDiff = Math.abs(bigDate.getTime() - shortDate.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  public canCreateRentInThisDays(
      dateFrom: Date,
      dateTo: Date,
      lastRentDate: Date,
      maxRentDays: number,
      pauseBetweenRentalsByDays: number
  ) {
    if (
        dateFrom.getDay() === 7 ||
        dateFrom.getDay() === 6 ||
        dateTo.getDay() === 7 ||
        dateTo.getDay() === 6 ||
        this.getDiffDays(dateTo, dateFrom) > maxRentDays ||
        dateTo.getDay() < lastRentDate.getTime() ||
        this.getDiffDays(lastRentDate, dateFrom) < pauseBetweenRentalsByDays
    ) {
      throw new BadRequestException();
    }
    else
      return true;
  }

}


