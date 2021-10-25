import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DatabaseModule } from '../../database/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { DiscountsDataSeeder } from '../../database/seeders/discountsData.seeder';
import {DiscountRepository} from "./repository/discount.repository";

@Module({
  imports: [DatabaseModule, SeederModule.forFeature([DiscountsDataSeeder])],
  providers: [DiscountService, DiscountRepository],
})
export class DiscountModule {}
