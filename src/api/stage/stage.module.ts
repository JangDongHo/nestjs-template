import { Module } from '@nestjs/common';
import { StageProgressModule } from 'src/api/stage-progress/stage-progress.module';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';

@Module({
  imports: [StageProgressModule],
  controllers: [StageController],
  providers: [StageService],
})
export class StageModule {}
