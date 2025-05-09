import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LeaderboardModule } from './api/leaderboard/leaderboard.module';
import { StageModule } from './api/stage/stage.module';
import { DatabaseModule } from './type-orm/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    DatabaseModule,
    StageModule,
    LeaderboardModule,
  ],
})
export class AppModule {}
