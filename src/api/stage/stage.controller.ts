import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpsertCompleteDto } from 'src/api/stage/dtos/upsert-complete.dto';
import { StageService } from './stage.service';

@ApiTags('Stage')
@Controller('stage')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @Post('complete')
  async saveComplete(@Body() body: UpsertCompleteDto) {
    return this.stageService.save(body);
  }
}
