import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Dictionary } from './Models/dictionary.model';
import { Vocabulary } from './models/vocabulary.model';
import { VipUser} from './models/vipuser.model';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

//导入所有数据库模型再导出，其他地方就可以使用
const models = TypegooseModule.forFeature([
  User,
  VipUser,
  Dictionary,
  Vocabulary
])

@Global()//标记为全局

@Module({
  imports: [
    //异步加载，放置和ConfigModule同时加载
    TypegooseModule.forRootAsync({
      useFactory(){
        return {
          uri: process.env.DB_URL,
          options
        }
      }
    }),
    models,
    //forRoot方法连接数据库
    // TypegooseModule.forRoot(dbURL,options),
    
  ],
  providers: [DbService],
  exports: [DbService, models],
})

export class DbModule {}