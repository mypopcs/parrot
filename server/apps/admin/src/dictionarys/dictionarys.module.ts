import { Module } from '@nestjs/common';
import { DictionarysController } from './dictionarys.controller';

@Module({
  controllers: [DictionarysController]
})
export class DictionarysModule {}
