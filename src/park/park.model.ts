import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface ParkCreationAttrs {
   name: string;
    park: string;
}

@Table({tableName: 'park'})
export class Park extends Model<Park, ParkCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'СЕВЕРО-ПОКРОВСКОЕ', description: 'название станции'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 'Парк "С"', description: 'название парка'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    parks: string;

    @ApiProperty({example: 'Парк "С"', description: 'название парка'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    ways: string;

}
