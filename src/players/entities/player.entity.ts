import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('players')
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
}
