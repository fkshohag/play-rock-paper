import { Test, TestingModule } from '@nestjs/testing';
import { ConsoleuserController } from './consoleuser.controller';

describe('ConsoleuserController', () => {
  let controller: ConsoleuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsoleuserController],
    }).compile();

    controller = module.get<ConsoleuserController>(ConsoleuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
