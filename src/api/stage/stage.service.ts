import { Injectable } from '@nestjs/common';
import { CreateCompleteDto } from 'src/api/stage/dtos/create-complete.dto';

@Injectable()
export class StageService {
  async create(body: CreateCompleteDto) {}
}
