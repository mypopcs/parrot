import { Module } from '@nestjs/common';
import { VocabularysController } from './vocabularys.controller';

@Module({
  controllers: [VocabularysController]
})
export class VocabularysModule {}
