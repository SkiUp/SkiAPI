/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  public getHello() {
    return 'hello';
  }
}
