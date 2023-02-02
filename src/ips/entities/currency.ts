import { ApiProperty } from '@nestjs/swagger';

export class CurrencyEntity {
  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  plural: string;

  @ApiProperty()
  exchange_rate: string;
}
