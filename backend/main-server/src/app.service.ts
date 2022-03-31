import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Bienvenidos a SmartHomeSweetHome!';
  }

  getPage1(): any {
    return {name: 'Baila morena, mueve morena', type: 1};
  }
}
