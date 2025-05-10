import { ApiProperty } from '@nestjs/swagger';

export class LeaderboardDto {
  @ApiProperty({ description: '사용자 ID' })
  userId: number;

  @ApiProperty({ description: '점수' })
  score: number;
}
