import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Rent extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column
  public car_id: number;

  @Column
  public tariff_id: number;

  @Column
  public date_from: string;

  @Column
  public date_to: string;

  @Column
  public amount: number;

  @Column
  public discounted_amount: number;

  @Column({type: 'timestamp', defaultValue: () => "CURRENT_TIMESTAMP"})
  public createdAt: Date;

  @Column({type: 'timestamp', defaultValue: () => "CURRENT_TIMESTAMP"})
  public updatedAt: Date;
}
