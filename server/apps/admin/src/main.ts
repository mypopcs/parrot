import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, ()=> {
    console.log('服务运行在：http://localhost:3000')
    console.log('Swagger服务器运行在：http://localhost:3000/api-docs')
  });
}
bootstrap();
