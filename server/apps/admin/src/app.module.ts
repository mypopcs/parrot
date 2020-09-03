import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DictionarysModule } from './dictionarys/dictionarys.module';
import { VocabularysModule } from './vocabularys/vocabularys.module';
import { VipusersModule } from './vipusers/vipusers.module';
import { CommonModule } from '@app/common';

@Module({
  imports: [
    CommonModule,
    UsersModule,
    DictionarysModule,
    VocabularysModule,
    VipusersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
