import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Settings extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column
  public key: string;

  @Column
  public value: string;
}
