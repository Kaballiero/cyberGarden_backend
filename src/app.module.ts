import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationModule } from './station/station.module';
import { Station } from './station/station.model';
import { WayModule } from './way/way.module';
import { ParkModule } from './park/park.module';
import { Way } from './way/way.model';
import { Park } from './park/park.model';
import { LocomotiveModule } from './locomotive/locomotive.module';
import { Locomotive } from './locomotive/locomotive.model';
import { WagonModule } from './wagon/wagon.module';
import { Wagon } from './wagon/wagon.model';
import { OperationModule } from './operation/operation.module';
import { Operation } from './operation/operation.model';
import { StationPark } from './station/station-park.model';
import { StationWay } from './station/station-way.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'cyberGarden',
      models: [Station, Way, Park, Locomotive, Wagon, Operation, StationPark, StationWay],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    StationModule,
    WayModule,
    ParkModule,
    LocomotiveModule,
    WagonModule,
    OperationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
