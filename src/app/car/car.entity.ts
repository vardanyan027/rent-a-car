import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Car extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  mark: string;

  @Column
  model: string;

  @Column({
    unique: true,
  })
  license_plate: string;

  @Column({
    unique: true,
  })
  vin: string;

  @Column
  status: number;
}
