import { ApiProperty } from '@nestjs/swagger';

export class ConnectionEntity {
  @ApiProperty()
  asn: number;

  @ApiProperty()
  org: string;

  @ApiProperty()
  isp: string;

  @ApiProperty()
  domain: string;
}
