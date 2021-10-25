import {Injectable} from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import {CreateRentEntityDto} from "../dto/createRentEntity.dto";

@Injectable()
export class RentRepository {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(data: CreateRentEntityDto) {
    return await this.databaseService.executeQuery(
        `INSERT INTO "Rents" (car_id, tariff_id, date_from, date_to, amount, discounted_amount, "createdAt", "updatedAt")
                            VALUES (${data.car_id}, ${data.tariff_id}, '${data.date_from}', '${data.date_to}', ${data.amount}, ${data.discounted_amount}, NOW()::TIMESTAMP, NOW()::TIMESTAMP)`
        );
  }

  async findLastRentForCarByCarId(id: number) {
    return await this.databaseService.executeQuery(
      `SELECT * from "Rents" WHERE car_id = ${id} AND id=(SELECT max(id) FROM "Rents")`,
    );
  }
}
