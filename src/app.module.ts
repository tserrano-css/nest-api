import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { SeasonsModule } from './seasons/seasons.module';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      username: 'user_pesg11',
      password: 'password_pesg11',
      database: 'db_pesg11',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlayersModule,
    SeasonsModule,
    TournamentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
