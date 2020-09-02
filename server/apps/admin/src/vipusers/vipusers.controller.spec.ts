import { Test, TestingModule } from '@nestjs/testing';
import { VipusersController } from './vipusers.controller';

describe('Vipusers Controller', () => {
  let controller: VipusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VipusersController],
    }).compile();

    controller = module.get<VipusersController>(VipusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
