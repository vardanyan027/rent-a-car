import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';
import { Discount } from '../../app/discount/discount.entity';

@Seeder({
  model: Discount,
})
export class DiscountsDataSeeder implements OnSeederInit {
  run() {
    return [
      {
        type: 'when_booking_from_and_to',
        value: 5,
        is_percent: true,
        data: {
          days_from: 3,
          days_to: 5,
        },
      },
      {
        type: 'when_booking_from_and_to',
        value: 10,
        is_percent: true,
        data: {
          days_from: 6,
          days_to: 14,
        },
      },
      {
        type: 'when_booking_from_and_to',
        value: 15,
        is_percent: true,
        data: {
          days_from: 15,
          days_to: 30,
        },
      },
    ];
  }
}
