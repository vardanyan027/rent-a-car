import {Injectable} from '@nestjs/common';
import {StatisticRepository} from "./repository/statistic.repository";
import {CreateStatisticDto} from "./dto/createStatistic.dto";
import {CreateStatisticRepositoryDto} from "./dto/createStatisticRepository.dto";
import {elementAt} from "rxjs";
import {BadRequestException} from "../../exception/BadRequestException";

@Injectable()
export class StatisticService {
    constructor(private statisticRepository: StatisticRepository) {
    }

    create(data: CreateStatisticDto) {
        while (data.date_from <= data.date_to) {
            let dataRepository = new CreateStatisticRepositoryDto();
            dataRepository.car_id = data.car_id;
            dataRepository.day = data.date_from.toLocaleDateString();
            dataRepository.count = data.count;
            data.date_from.setDate(data.date_from.getDate() + 1);
            this.statisticRepository.create(dataRepository);
        }
    }

    getById(car_id: number) {
        return this.statisticRepository.getById(car_id);
    }

    async getByDay(day: string) {
        let data = await this.statisticRepository.getByDay(new Date(day).toLocaleDateString());
        return data[0].sum;
    }

    async getByPeriod(data) {
        let dataFrom = new Date(data.date_from);
        let dataTo = new Date(data.date_to);
        let dataRes = []
        while(dataFrom <= dataTo) {
            let countData = await this.statisticRepository.getByDay(dataFrom.toLocaleDateString());
            dataRes.push({
                day: dataFrom.toLocaleDateString(),
                count: countData[0].sum || 0,
            })
            dataFrom.setDate(dataFrom.getDate() + 1);
        }
        return dataRes;
    }
}
