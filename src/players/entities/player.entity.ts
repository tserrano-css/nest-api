import { SeasonPlayer } from 'src/season-players/entities/season-player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Players')
export class Player {
  @PrimaryGeneratedColumn()
  playerId: number;

  @Column()
  playerName: string;

  @Column()
  pesMasterId: string;

  @Column()
  pesMasterName: string;

  @Column()
  transfermarktURL?: string;

  @Column()
  missing: boolean;

  @OneToMany(() => SeasonPlayer, (seasonPlayer) => seasonPlayer.player)
  seasonPlayers: SeasonPlayer[];
}
