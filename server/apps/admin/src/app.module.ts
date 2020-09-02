import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DbModule } from '@libs/db';
import { DictionarysModule } from './dictionarys/dictionarys.module';
import { VocabularysModule } from './vocabularys/vocabularys.module';
import { VipusersModule } from './vipusers/vipusers.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    DictionarysModule,
    VocabularysModule,
    VipusersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
