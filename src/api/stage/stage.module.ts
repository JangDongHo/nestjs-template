import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stage } from 'src/type-orm/entities/stage/stage.entity';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';

@Module({
  imports: [TypeOrmModule.forFeature([Stage])],
  controllers: [StageController],
  providers: [StageService],
})
export class StageModule {}
