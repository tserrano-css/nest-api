import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  private players: Player[] = [
    {
      PlayerId: 1,
      PlayerName: 'S. SIRIGU',
      PesMasterId: '32764',
      PesMasterName: 's-sirigu',
      TranfermarktURL: null,
      Missing: false,
    },
    {
      PlayerId: 2,
      PlayerName: 'Y. SOMMER',
      PesMasterId: '36627',
      PesMasterName: 'y-sommer',
      TranfermarktURL:
        'https://www.transfermarkt.es/yann-sommer/profil/spieler/42205',
      Missing: false,
    },
  ];

  getPlayers(): Player[] {
    return this.players;
  }

  getPlayer(id: any): Player {
    return this.players.find((player) => player.PlayerId == id);
  }

  createPlayer(player): Player {
    this.players.push({
      PlayerId: this.players.length + 1,
      ...player,
    });
    return this.players[this.players.length - 1];
  }
}
