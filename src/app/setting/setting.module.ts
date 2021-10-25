import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { DatabaseModule } from '../../database/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SettingsDataSeeder } from '../../database/seeders/settingsData.seeder';

@Module({
  imports: [DatabaseModule, SeederModule.forFeature([SettingsDataSeeder])],
  providers: [SettingService],
})
export class SettingModule {}
