import { Module } from '@nestjs/common';
import { FeatureModule } from './feature/feature.module';
import { TariffService } from './tariff.service';
import { DatabaseModule } from '../../database/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { TariffsDataSeeder } from '../../database/seeders/tariffsData.seeder';
import { RentRepository } from '../rent/repository/rent.repository';

@Module({
  providers: [TariffService, RentRepository],
  imports: [
    FeatureModule,
    DatabaseModule,
    SeederModule.forFeature([TariffsDataSeeder]),
  ],
})
export class TariffModule {}
