import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';
import { Tariff } from '../../app/tariff/tariff.entity';

@Seeder({
  model: Tariff,
})
export class TariffsDataSeeder implements OnSeederInit {
  run() {
    return [
      {
        name: 'Basic',
        price: 270,
        currency: 'EUR',
      },
      {
        name: 'Plus',
        price: 330,
        currency: 'EUR',
      },
      {
        name: 'Pro',
        price: 390,
        currency: 'EUR',
      },
    ];
  }
}
