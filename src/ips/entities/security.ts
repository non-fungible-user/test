import { ApiProperty } from '@nestjs/swagger';

export class SecurityEntity {
  @ApiProperty()
  anonymous: boolean;

  @ApiProperty()
  proxy: boolean;

  @ApiProperty()
  vpn: boolean;

  @ApiProperty()
  tor: boolean;

  @ApiProperty()
  hosting: boolean;
}
