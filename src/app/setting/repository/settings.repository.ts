import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';

@Injectable()
export class SettingsRepository {
  constructor(private readonly databaseService: DatabaseService) {}
  async findAll() {
    return await this.databaseService.executeQuery(`SELECT * from "Settings"`);
  }

  async findMaxRentDays() {
    return await this.databaseService.executeQuery(
      `SELECT * from "Settings" WHERE key = 'max_rent_days'`,
    );
  }

  async findPauseBetweenRentalsByDays() {
    return await this.databaseService.executeQuery(
      `SELECT * from "Settings" WHERE key = 'pause_between_rentals_by_days'`,
    );
  }
}
