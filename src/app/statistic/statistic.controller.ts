import {Controller, Get, Param, Query} from '@nestjs/common';
import {StatisticService} from "./statistic.service";

@Controller('statistic')
export class StatisticController {

    constructor(private statisticService: StatisticService) {
    }

    @Get()
    getById(@Query() data) {
        if (data.car_id) {
            return this.statisticService.getById(data.car_id);
        }

        if (data.day) {
            return this.statisticService.getByDay(data.day);
        }

        if (data.date_from && data.date_to) {
            return this.statisticService.getByPeriod(data);
        }
    }

}
