import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageProgressService } from 'src/api/stage-progress/stage-progress.service';
import { StageProgress } from 'src/type-orm/entities/stage-progress/stage-progress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StageProgress])],
  providers: [StageProgressService],
  exports: [StageProgressService],
})
export class StageProgressModule {}
