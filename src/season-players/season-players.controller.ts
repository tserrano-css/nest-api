import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeasonPlayersService } from './season-players.service';
import { CreateSeasonPlayerDto } from './dto/create-season-player.dto';
import { UpdateSeasonPlayerDto } from './dto/update-season-player.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('season-players')
@Controller('season-players')
export class SeasonPlayersController {
  constructor(private readonly seasonPlayersService: SeasonPlayersService) {}

  @Post()
  create(@Body() createSeasonPlayerDto: CreateSeasonPlayerDto) {
    return this.seasonPlayersService.create(createSeasonPlayerDto);
  }

  @Get()
  findAll() {
    return this.seasonPlayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seasonPlayersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeasonPlayerDto: UpdateSeasonPlayerDto,
  ) {
    return this.seasonPlayersService.update(+id, updateSeasonPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seasonPlayersService.remove(+id);
  }
}
