import { Controller, Get } from '@nestjs/common';
import { WayService } from './way.service';

@Controller('way')
export class WayController {

    constructor(private wayService: WayService) {}
    @Get()
  getHello(): string {
    return this.wayService.getHello();
  }
}
