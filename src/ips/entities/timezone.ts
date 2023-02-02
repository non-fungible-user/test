import { ApiProperty } from '@nestjs/swagger';

export class TimezoneEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  abbr: string;

  @ApiProperty()
  is_dst: boolean | number;

  @ApiProperty()
  offset: number;

  @ApiProperty()
  current_time: string;
}
