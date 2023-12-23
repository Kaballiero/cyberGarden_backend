import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkService { 
    getHello(): string {
    return 'Hello World!';
  }}
