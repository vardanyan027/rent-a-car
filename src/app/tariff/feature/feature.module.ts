import { Module } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { DatabaseModule } from '../../../database/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { FeaturesDataSeeder } from '../../../database/seeders/featuresData.seeder';

@Module({
  imports: [DatabaseModule, SeederModule.forFeature([FeaturesDataSeeder])],
  providers: [FeatureService],
})
export class FeatureModule {}
