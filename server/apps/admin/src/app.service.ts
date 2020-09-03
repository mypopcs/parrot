import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `服务端：<br/><a href="http://localhost:${process.env.ADMIN_PORT}/api-docs">Swagger服务器</a>`;
  }
}
