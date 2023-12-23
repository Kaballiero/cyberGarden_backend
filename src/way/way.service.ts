import { Injectable } from '@nestjs/common';

@Injectable()
export class WayService { 
    getHello(): string {
    return 'Hello World!';
  }}
