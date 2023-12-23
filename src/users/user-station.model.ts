import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Station } from "src/station/station.model";
import { User } from "./users.model";


@Table({tableName: 'user_station', createdAt: false, updatedAt: false})
export class UserStation extends Model<UserStation> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Station)
    @Column({type: DataType.INTEGER})
    stationId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}
