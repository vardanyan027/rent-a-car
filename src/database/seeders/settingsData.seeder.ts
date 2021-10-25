import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';
import { Settings } from '../../app/setting/setting.entity';

@Seeder({
  model: Settings,
})
export class SettingsDataSeeder implements OnSeederInit {
  run() {
    return [
      {
        key: 'max_rent_days',
        value: '30',
      },
      {
        key: 'pause_between_rentals_by_days',
        value: '3',
      },
    ];
  }
}
