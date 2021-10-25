import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { DiscountDataInterface } from './discountData.interface';

const DISCOUNT_DEFAULT_TYPE = 'when_booking_from_and_to';

@Table
export class Discount extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column({ defaultValue: DISCOUNT_DEFAULT_TYPE })
  public type: string;

  @Column
  public value: number;

  @Column
  public is_percent: boolean;

  @Column({
    type: 'jsonb',
  })
  public data: DiscountDataInterface;
}
