import { Controller, Get, Param } from '@nestjs/common';
import { LeaderboardDto } from 'src/api/leaderboard/dtos/leaderboard.dto';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get(':stageId')
  async getLeaderboard(
    @Param('stageId') stageId: number,
  ): Promise<LeaderboardDto[]> {
    return this.leaderboardService.findTop10(stageId);
  }
}
