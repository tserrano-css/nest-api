import { Test, TestingModule } from '@nestjs/testing';
import { SeasonPlayersController } from './season-players.controller';
import { SeasonPlayersService } from './season-players.service';

describe('SeasonPlayersController', () => {
  let controller: SeasonPlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeasonPlayersController],
      providers: [SeasonPlayersService],
    }).compile();

    controller = module.get<SeasonPlayersController>(SeasonPlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
