import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import {TariffNotFoundException} from "../../../exception/TariffNotFoundException";

@Injectable()
export class TariffRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  public async getById(id: number): Promise<any> {
    const tariff = this.databaseService.executeQuery(
      `SELECT * from "Tariffs" WHERE id = ${id}`,
    );
    if ((await tariff).length === 0) {
      throw new TariffNotFoundException();
    }
    return await tariff;
  }
}
