import {HasOne, BelongsToMany, Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Park } from "src/park/park.model";
import { StationPark } from "./station-park.model";
import { Way } from "src/way/way.model";
import { StationWay } from "./station-way.model";
import { User } from "src/users/users.model";

interface StationCreationAttrs {
   name: string;
    park: string;
}

@Table({tableName: 'station'})
export class Station extends Model<Station, StationCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'СЕВЕРО-ПОКРОВСКОЕ', description: 'название станции'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 'Парк "С"', description: 'название парка'})
    @BelongsToMany(()=>Park,()=>StationPark)
    park: Park[]

    @ApiProperty({example: 'путь "10С"', description: 'название пути'})
    @BelongsToMany(()=>Way,()=>StationWay)
    way: Way[]

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    userId: number


}
