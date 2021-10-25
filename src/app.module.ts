import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarModule } from './app/car/car.module';
import { ConfigModule } from '@nestjs/config';
import { Car } from './app/car/car.entity';
import { Rent } from './app/rent/rent.entity';
import { Discount } from './app/discount/discount.entity';
import { Tariff } from './app/tariff/tariff.entity';
import { Features } from './app/tariff/feature/feature.entity';
import { Settings } from './app/setting/setting.entity';
import {Statistics} from "./app/statistic/statistic.entity";
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SettingModule } from './app/setting/setting.module';
import { TariffModule } from './app/tariff/tariff.module';
import { RentModule } from './app/rent/rent.module';
import { FeatureModule } from './app/tariff/feature/feature.module';
import { DiscountModule } from './app/discount/discount.module';
import { StatisticModule } from './app/statistic/statistic.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'car_rent',
      models: [Car, Rent, Discount, Tariff, Features, Settings, Statistics],
      synchronize: true,
      autoLoadModels: true,
    }),
    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../env',
    }),
    CarModule,
    SettingModule,
    TariffModule,
    RentModule,
    DiscountModule,
    FeatureModule,
    StatisticModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
