import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { DatabaseModule } from '../../database/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { CarsDataSeeder } from '../../database/seeders/carsData.seeder';
import { CarRepository } from './repository/car.repository';

@Module({
  imports: [DatabaseModule, SeederModule.forFeature([CarsDataSeeder])],
  providers: [CarService, CarRepository],
  controllers: [CarController],
})
export class CarModule {}
