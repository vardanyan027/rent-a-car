import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';
import { Car } from '../../app/car/car.entity';

@Seeder({
  model: Car,
  unique: ['license_plate', 'vin'],
})
export class CarsDataSeeder implements OnSeederInit {
  run() {
    return [
      {
        mark: 'BMW',
        model: 'i750',
        license_plate: '1ABC234',
        vin: '1KLBN52TWXM186109',
        status: 1,
      },
      {
        mark: 'Mercedes',
        model: 'e63',
        license_plate: '1DFG234',
        vin: '1KLBN52TWXM645145',
        status: 0,
      },
      {
        mark: 'Audi',
        model: 'tfsi',
        license_plate: '1ABC451',
        vin: '1KLBN52GRDS186109',
        status: 1,
      },
      {
        mark: 'Lexus',
        model: 'lx570',
        license_plate: '5SDE234',
        vin: '1HJKM52TWXM186109',
        status: 1,
      },
      {
        mark: 'Toyota',
        model: 'Camry',
        license_plate: '1GHT547',
        vin: '1KLBN84HTM186109',
        status: 1,
      },
    ];
  }
}
