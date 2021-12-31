import { ApiProperty } from '@nestjs/swagger';
import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('SeasonPlayers')
export class SeasonPlayer {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'SeasonPlayerID' })
  id: number;

  @Column({ name: 'PlayerId' })
  playerId: number;

  @ManyToOne(() => Player, (player) => player.seasonPlayers, {
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'playerId', referencedColumnName: 'playerId' })
  player: Player;

  @Column({ name: 'MachinePrice' })
  machinePrice: number;
}
