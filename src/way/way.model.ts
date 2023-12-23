import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface WayCreationAttrs {
   name: string;
    park: string;
}

@Table({tableName: 'way'})
export class Way extends Model<Way, WayCreationAttrs> {
    
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
