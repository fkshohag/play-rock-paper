import { Test, TestingModule } from '@nestjs/testing';
import { ConsoleuserService } from './consoleuser.service';

describe('ConsoleuserService', () => {
  let service: ConsoleuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsoleuserService],
    }).compile();

    service = module.get<ConsoleuserService>(ConsoleuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
