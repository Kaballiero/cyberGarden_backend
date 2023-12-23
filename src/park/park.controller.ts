import { Controller, Get } from '@nestjs/common';
import { ParkService } from './park.service';

@Controller('park')
export class ParkController {

    constructor(private parkService: ParkService) {}
    @Get()
  getHello(): string {
    return this.parkService.getHello();
  }
}
