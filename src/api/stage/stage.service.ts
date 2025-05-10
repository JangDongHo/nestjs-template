import { Injectable } from '@nestjs/common';
import { StageProgressService } from 'src/api/stage-progress/stage-progress.service';
import { UpsertCompleteDto } from 'src/api/stage/dtos/upsert-complete.dto';

@Injectable()
export class StageService {
  constructor(private readonly stageProgressService: StageProgressService) {}

  async save(body: UpsertCompleteDto) {
    let updated = false;
    const stageProgress =
      await this.stageProgressService.findByUserIdAndStageId(
        body.userId,
        body.stageId,
      );

    if (
      !stageProgress ||
      body.score > stageProgress.score ||
      body.stars > stageProgress.stars
    ) {
      await this.stageProgressService.save(body);
      updated = true;
    }

    return {
      message: 'Stage progress updated',
      updated,
    };
  }
}
