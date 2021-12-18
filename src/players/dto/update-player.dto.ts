import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdatePlayerDto {
  @IsOptional()
  @IsString()
  playerName?: string;

  @IsOptional()
  @IsString()
  pesMasterId?: string;

  @IsOptional()
  @IsString()
  pesMasterName?: string;

  @IsOptional()
  @IsString()
  tranfermarktURL?: string;

  @IsOptional()
  @IsBoolean()
  missing?: boolean;
}
