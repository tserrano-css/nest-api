import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playersRepository: Repository<Player>,
  ) {}

  getManyPlayers(): Promise<Player[]> {
    return this.playersRepository.find();
  }

  getOnePlayer(playerId: number): Promise<Player> {
    return this.playersRepository.findOne(playerId);
  }

  async createOnePlayer(playerDto: CreatePlayerDto): Promise<Player> {
    const countExist = await this.playersRepository.count({
      where: {
        key: playerDto.pesMasterId,
      },
    });

    if (countExist > 0) {
      throw new ConflictException(
        `La PesmasterId ${playerDto.pesMasterId} ya existe`,
      );
    }

    const tempEntity = await this.playersRepository.create(playerDto);
    return this.playersRepository.save(tempEntity);
  }

  async partialUpdateOnePlayer(
    playerId: number,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    const preloadData = {
      id: playerId,
      ...updatePlayerDto,
    };
    const preloadProject = await this.playersRepository.preload(preloadData);

    if (!preloadProject) {
      throw new NotFoundException('El player no existe');
    }

    return this.playersRepository.save(preloadProject);
  }

  async deleateOnePlayer(playerId: number) {
    const project = await this.playersRepository.findOne(playerId);

    if (!project) {
      return;
    }

    this.playersRepository.delete(project);
  }
}
