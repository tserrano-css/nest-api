import { PartialType } from '@nestjs/swagger';
import { CreateSeasonPlayerDto } from './create-season-player.dto';

export class UpdateSeasonPlayerDto extends PartialType(CreateSeasonPlayerDto) {}
