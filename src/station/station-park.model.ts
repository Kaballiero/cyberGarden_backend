import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Park } from "src/park/park.model";
import { Station } from "./station.model";

@Table({tableName: 'station_park', createdAt: false, updatedAt: false})
export class StationPark extends Model<StationPark> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Park)
    @Column({type: DataType.INTEGER})
    parkId: number;

    @ForeignKey(() => Station)
    @Column({type: DataType.INTEGER})
    stationId: number;

}
