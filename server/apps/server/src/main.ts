import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const Port = process.env.SERVER_PORT || 3003
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //swagger
  const options = new DocumentBuilder()
    .setTitle('Parrot API文档')
    .setDescription('Parrot前后台界面接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(Port, ()=> {
    console.log(`服务运行在：http://localhost:${Port}`)
  });
}
bootstrap();
