import { IsBoolean, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  playerId: number;

  @IsString()
  playerName: string;

  @IsString()
  pesMasterId: string;

  @IsString()
  pesMasterName: string;

  @IsString()
  tranfermarktURL: string;

  @IsBoolean()
  missing: boolean;
}
