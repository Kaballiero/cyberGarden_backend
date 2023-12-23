import { Controller, Get } from '@nestjs/common';
import { StationService } from './station.service';

@Controller('station')
export class StationController {

    constructor(private stationService: StationService) {}
    @Get()
  getHello(): string {
    return this.stationService.getHello();
  }
}
