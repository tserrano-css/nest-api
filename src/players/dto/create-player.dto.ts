import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreatePlayerDto {
  /*
  @ApiProperty({
    description: 'Identificador númerico del player',
    example: '12345',
  })
  @ApiProperty()
  @IsNumber()
  playerId: number;*/

  @ApiProperty()
  @IsString()
  playerName: string;

  @ApiProperty()
  @IsString()
  pesMasterId: string;

  @ApiProperty()
  @IsString()
  pesMasterName: string;

  @ApiProperty()
  @IsString()
  tranfermarktURL: string;

  @ApiProperty()
  @IsBoolean()
  missing: boolean;
}
