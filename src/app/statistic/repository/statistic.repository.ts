import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../../../database/database.service";
import {CreateStatisticRepositoryDto} from "../dto/createStatisticRepository.dto";

@Injectable()
export class StatisticRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(data: CreateStatisticRepositoryDto) {
        return await this.databaseService.executeQuery(`INSERT INTO "Statistics" (car_id, day, count, "createdAt", "updatedAt") VALUES (${data.car_id}, '${data.day}', ${data.count}, NOW()::TIMESTAMP, NOW()::TIMESTAMP)`)
    }

    async getById(car_id: number) {
        return await this.databaseService.executeQuery(`SELECT * FROM "Statistics" WHERE car_id = ${car_id}`);
    }

    getByDay(day: string) {
        return this.databaseService.executeQuery(`SELECT SUM(count) FROM "Statistics" WHERE day = '${day}'`);
    }
}