import { Module } from '@nestjs/common';
import {DatabaseModule} from "../../database/database.module";
import {StatisticController} from "./statistic.controller";
import {StatisticService} from "./statistic.service";
import {StatisticRepository} from "./repository/statistic.repository";

@Module({
    imports: [DatabaseModule],
    providers: [StatisticService, StatisticRepository],
    controllers: [StatisticController],
    exports: [StatisticService, StatisticRepository]
})export class StatisticModule {}
