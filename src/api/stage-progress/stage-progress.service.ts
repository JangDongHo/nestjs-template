import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpsertCompleteDto } from 'src/api/stage/dtos/upsert-complete.dto';
import { StageProgress } from 'src/type-orm/entities/stage-progress/stage-progress.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StageProgressService {
  constructor(
    @InjectRepository(StageProgress)
    private stageProgressService: Repository<StageProgress>,
  ) {}

  async findTop10(stageId: number): Promise<StageProgress[]> {
    return this.stageProgressService.find({
      where: {
        stageId,
      },
      order: {
        score: 'DESC',
      },
      take: 10,
    });
  }

  async findByUserIdAndStageId(
    userId: number,
    stageId: number,
  ): Promise<StageProgress> {
    return this.stageProgressService.findOne({
      where: {
        userId,
        stageId,
      },
    });
  }

  async save(data: UpsertCompleteDto): Promise<StageProgress> {
    return this.stageProgressService.save(data);
  }
}
