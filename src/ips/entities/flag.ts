import { ApiProperty } from '@nestjs/swagger';

export class FlagEntity {
  @ApiProperty()
  img: string;

  @ApiProperty()
  emoji: string;

  @ApiProperty()
  emoji_unicode: string;
}
