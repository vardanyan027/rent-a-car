import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Features extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  tariff_id: number;

  @Column
  key: string;

  @Column
  value: number;
}
