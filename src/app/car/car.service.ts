import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class CarService {
  constructor(private readonly databaseService: DatabaseService) {}
  get() {
    return this.databaseService.executeQuery('SELECT * from "Cars"');
  }
}
