import { StageProgress } from 'src/type-orm/entities/stage-progress/stage-progress.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => StageProgress, (stageProgress) => stageProgress.stage)
  stageProgresses: StageProgress[];
}
