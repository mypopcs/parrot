import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '服务端：' + `<br/>` + `<a href="http://localhost:3000/api-docs">` + 'Swagger服务器' + `</a>`;
  }
}
