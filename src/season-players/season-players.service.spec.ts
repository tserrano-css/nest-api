import { Test, TestingModule } from '@nestjs/testing';
import { SeasonPlayersService } from './season-players.service';

describe('SeasonPlayersService', () => {
  let service: SeasonPlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeasonPlayersService],
    }).compile();

    service = module.get<SeasonPlayersService>(SeasonPlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
