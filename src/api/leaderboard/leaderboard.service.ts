import { Injectable } from '@nestjs/common';
import { StageProgressService } from 'src/api/stage-progress/stage-progress.service';
import { LeaderboardDto } from './dtos/leaderboard.dto';

@Injectable()
export class LeaderboardService {
  constructor(private readonly stageProgressService: StageProgressService) {}

  async findTop10(stageId: number): Promise<LeaderboardDto[]> {
    const top10 = await this.stageProgressService.findTop10(stageId);

    const entries: LeaderboardDto[] = top10.map((progress) => ({
      userId: progress.userId,
      score: progress.score,
    }));

    return entries;
  }
}
