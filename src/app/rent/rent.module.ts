import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentController } from './rent.controller';
import { RentRepository } from './repository/rent.repository';
import { DatabaseModule } from '../../database/database.module';
import { CarRepository } from '../car/repository/car.repository';
import { TariffRepository } from '../tariff/repository/tariff.repository';
import { SettingsRepository } from '../setting/repository/settings.repository';
import {DiscountRepository} from "../discount/repository/discount.repository";
import {StatisticService} from "../statistic/statistic.service";
import {StatisticRepository} from "../statistic/repository/statistic.repository";

@Module({
  imports: [DatabaseModule],
  providers: [
    RentService,
    RentRepository,
    CarRepository,
    TariffRepository,
    SettingsRepository,
    DiscountRepository,
    StatisticService,
    StatisticRepository
  ],
  controllers: [RentController],
})
export class RentModule {}
