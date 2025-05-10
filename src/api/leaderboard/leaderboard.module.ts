import { Module } from '@nestjs/common';
import { StageProgressModule } from 'src/api/stage-progress/stage-progress.module';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';

@Module({
  imports: [StageProgressModule],
  controllers: [LeaderboardController],
  providers: [LeaderboardService],
})
export class LeaderboardModule {}
