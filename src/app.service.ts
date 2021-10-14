import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  AppInformation(): string {
    return 'This is nisitfolio-backend for software engineering education';
  }
}
