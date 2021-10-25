import {
    AutoIncrement,
    Column,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table
export class Statistics extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    public car_id: number;

    @Column
    public day: string;

    @Column
    public count: number;
}
