import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';

export class UpdatePlayerDto extends PartialType(
  OmitType(CreatePlayerDto, ['playerId'] as const),
) {}
