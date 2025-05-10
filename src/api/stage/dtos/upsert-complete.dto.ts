import { ApiProperty } from '@nestjs/swagger';

export class UpsertCompleteDto {
  @ApiProperty({
    description: 'userId',
    example: 1,
  })
  userId: number;

  @ApiProperty({
    description: 'stageId',
    example: 1,
  })
  stageId: number;

  @ApiProperty({
    description: 'score',
    example: 100,
  })
  score: number;

  @ApiProperty({
    description: 'stars',
    example: 1,
  })
  stars: number;
}
