import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StageModule } from './stage/stage.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [StageModule, LeaderboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
