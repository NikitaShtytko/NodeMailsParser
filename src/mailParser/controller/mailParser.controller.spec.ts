import { Test, TestingModule } from '@nestjs/testing';
import { mailParserController } from './mailParser.controller';

describe('ImapController', () => {
  let controller: mailParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [mailParserController],
    }).compile();

    controller = module.get<mailParserController>(mailParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
