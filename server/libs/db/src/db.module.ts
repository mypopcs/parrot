import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';

const dbURL = 'mongodb://118.24.152.253/parrot'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

//导入所有数据库模型再导出，其他地方就可以使用
const models = TypegooseModule.forFeature([
  User
])

@Global()//标记为全局

@Module({
  imports: [
    //forRoot方法连接数据库
    TypegooseModule.forRoot(dbURL,options),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})

export class DbModule {}