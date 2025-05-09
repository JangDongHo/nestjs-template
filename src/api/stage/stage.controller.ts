import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCompleteDto } from 'src/api/stage/dtos/create-complete.dto';
import { StageService } from './stage.service';

@ApiTags('Stage')
@Controller('stage')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @Post('complete')
  async createComplete(@Body() body: CreateCompleteDto) {
    return this.stageService.create(body);
  }
}
