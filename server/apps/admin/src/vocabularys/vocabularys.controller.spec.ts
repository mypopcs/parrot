import { Test, TestingModule } from '@nestjs/testing';
import { VocabularysController } from './vocabularys.controller';

describe('Vocabularys Controller', () => {
  let controller: VocabularysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VocabularysController],
    }).compile();

    controller = module.get<VocabularysController>(VocabularysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
