import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Station } from "./station.model";
import { Way } from "src/way/way.model";

@Table({tableName: 'station_way', createdAt: false, updatedAt: false})
export class StationWay extends Model<StationWay> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Way)
    @Column({type: DataType.INTEGER})
    wayId: number;

    @ForeignKey(() => Station)
    @Column({type: DataType.INTEGER})
    stationId: number;

}
