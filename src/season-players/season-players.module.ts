import { Module } from '@nestjs/common';
import { SeasonPlayersService } from './season-players.service';
import { SeasonPlayersController } from './season-players.controller';
import { SeasonPlayer } from './entities/season-player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SeasonPlayer])],
  controllers: [SeasonPlayersController],
  providers: [SeasonPlayersService],
})
export class SeasonPlayersModule {}
