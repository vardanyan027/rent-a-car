import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';
import { Features } from '../../app/tariff/feature/feature.entity';

@Seeder({
  model: Features,
})
export class FeaturesDataSeeder implements OnSeederInit {
  run() {
    return [
      {
        tariff_id: 1,
        key: 'daily',
        value: 200,
      },
      {
        tariff_id: 2,
        key: 'daily',
        value: 350,
      },
      {
        tariff_id: 3,
        key: 'daily',
        value: 500,
      },
    ];
  }
}
