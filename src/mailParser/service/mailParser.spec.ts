import { Test, TestingModule } from '@nestjs/testing';
import { mailParserService } from './mailParser.service';

describe('ImapService', () => {
  let service: mailParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [mailParserService],
    }).compile();

    service = module.get<mailParserService>(mailParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
