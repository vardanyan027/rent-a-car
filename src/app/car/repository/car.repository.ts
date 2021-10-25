import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import {CarIsNotAvailableException} from "../../../exception/CarIsNotAvailableException";

@Injectable()
export class CarRepository {
  constructor(private readonly databaseService: DatabaseService) {}
  public async getById(id: number): Promise<any[]> {
    const car = this.databaseService.executeQuery(
      `SELECT * from "Cars" WHERE status = 1 AND id = ${id}`,
    );
    if ((await car).length === 0) {
      throw new CarIsNotAvailableException();
    }
    return await car;
  }

}
