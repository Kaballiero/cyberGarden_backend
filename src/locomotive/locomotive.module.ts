import { Module } from '@nestjs/common';
import { LocomotiveController } from './locomotive.controller';
import { LocomotiveService } from './locomotive.service';

@Module({
  controllers: [LocomotiveController],
  providers: [LocomotiveService]
})
export class LocomotiveModule {}
