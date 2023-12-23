import { Module } from '@nestjs/common';
import { WayController } from './way.controller';
import { WayService } from './way.service';

@Module({
  controllers: [WayController],
  providers: [WayService],
  exports:[WayService]
})
export class WayModule {}
