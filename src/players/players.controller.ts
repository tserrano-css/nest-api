import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayersService } from './players.service';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getManyPlayers(): Promise<Player[]> {
    return this.playersService.getManyPlayers();
  }

  @Get(':playerId')
  @HttpCode(HttpStatus.OK)
  async cgetOnePlayer(
    @Param('playerId', ParseIntPipe) playerId: number,
  ): Promise<Player> {
    const player = await this.playersService.getOnePlayer(playerId);

    if (!player) {
      throw new NotFoundException(`Player con id ${playerId} no existe`);
    }
    return player;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createOnePlayer(@Body() playerDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.createOnePlayer(playerDto);
  }

  @Patch(':playerId')
  @HttpCode(HttpStatus.OK)
  partialUpdateOnePlayer(
    @Param('playerId', ParseIntPipe) playerId: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    return this.playersService.partialUpdateOnePlayer(
      playerId,
      updatePlayerDto,
    );
  }

  @Delete(':playerId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleateOnePlayer(@Param('playerId', ParseIntPipe) playerId: number) {
    return this.playersService.deleateOnePlayer(playerId);
  }
}
