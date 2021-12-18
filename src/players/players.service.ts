import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

const mock: Player[] = [
  {
    playerId: 1,
    playerName: 'S. SIRIGU',
    pesMasterId: '32764',
    pesMasterName: 's-sirigu',
    tranfermarktURL: null,
    missing: false,
  },
  {
    playerId: 2,
    playerName: 'Y. SOMMER',
    pesMasterId: '36627',
    pesMasterName: 'y-sommer',
    tranfermarktURL:
      'https://www.transfermarkt.es/yann-sommer/profil/spieler/42205',
    missing: false,
  },
  {
    playerId: 3,
    playerName: 'N. OTAMENDI',
    pesMasterId: '40725',
    pesMasterName: 'n-otamendi',
    tranfermarktURL:
      'https://www.transfermarkt.es/nicolas-otamendi/profil/spieler/54781',
    missing: false,
  },
];

@Injectable()
export class PlayersService {
  getManyPlayers(): Player[] {
    return mock;
  }

  getOnePlayer(playerId: number): Player {
    throw new Error('Method not implemented.');
  }

  createOnePlayer(playerDto: CreatePlayerDto): Player {
    const a = mock[0];
    return { ...a, ...playerDto };
  }

  partialUpdateOnePlayer(
    playerId: number,
    updatePlayerDto: UpdatePlayerDto,
  ): Player {
    const res = mock.find((player) => (player.playerId = playerId));
    return { ...res, ...updatePlayerDto };
  }

  deleateOnePlayer(playerId: number) {
    throw new Error('Method not implemented.');
  }
}
