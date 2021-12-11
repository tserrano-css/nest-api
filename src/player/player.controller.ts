import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getAll() {
    return this.playerService.getPlayers();
  }

  @Get(':id')
  getPlayer(@Param('id', ParseIntPipe) id): Player {
    return this.playerService.getPlayer(id);
  }

  @Post()
  createPlayer(@Body() player) {
    //return `Crear un jugador: ${body.name} Juega de ${body.posicion}`;
    return this.playerService.createPlayer(player);
  }
}
