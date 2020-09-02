import { Module } from '@nestjs/common';
import { VipUsersController } from './vipusers.controller';

@Module({
  controllers: [VipUsersController]
})
export class VipusersModule {}
