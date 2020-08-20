import { Test, TestingModule } from '@nestjs/testing';
import { DictionarysController } from './dictionarys.controller';

describe('Dictionarys Controller', () => {
  let controller: DictionarysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DictionarysController],
    }).compile();

    controller = module.get<DictionarysController>(DictionarysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
