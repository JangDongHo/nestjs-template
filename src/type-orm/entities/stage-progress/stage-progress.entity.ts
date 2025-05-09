import { Stage } from 'src/type-orm/entities/stage/stage.entity';
import { User } from 'src/type-orm/entities/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class StageProgress {
  @PrimaryColumn()
  stageId: number;

  @PrimaryColumn()
  userId: number;

  @Column()
  score: number;

  @Column()
  stars: number;

  @ManyToOne(() => Stage, (stage) => stage.stageProgresses)
  stage: Stage;

  @ManyToOne(() => User, (user) => user.stageProgresses)
  user: User;
}
