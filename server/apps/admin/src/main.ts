import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,         //设置跨站访问
  });

  //swagger
  const options = new DocumentBuilder()
    .setTitle('Parrot API文档')
    .setDescription('Parrot前后台界面接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000, ()=> {
    console.log('服务运行在：http://localhost:3000')
    console.log('Swagger服务器运行在：http://localhost:3000/api-docs')
  });
}
bootstrap();
