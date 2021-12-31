import { Injectable } from '@nestjs/common';
import { CreateSeasonPlayerDto } from './dto/create-season-player.dto';
import { UpdateSeasonPlayerDto } from './dto/update-season-player.dto';

@Injectable()
export class SeasonPlayersService {
  create(createSeasonPlayerDto: CreateSeasonPlayerDto) {
    return 'This action adds a new seasonPlayer';
  }

  findAll() {
    return `This action returns all seasonPlayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seasonPlayer`;
  }

  update(id: number, updateSeasonPlayerDto: UpdateSeasonPlayerDto) {
    return `This action updates a #${id} seasonPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} seasonPlayer`;
  }
}
