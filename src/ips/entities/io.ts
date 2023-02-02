import { ApiProperty } from '@nestjs/swagger';
import { IpType } from 'src/types/ip';
import { ConnectionEntity } from './connection';
import { CurrencyEntity } from './currency';
import { FlagEntity } from './flag';
import { SecurityEntity } from './security';
import { TimezoneEntity } from './timezone';

export class IpEntity {
  @ApiProperty()
  ip: string;

  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message?: string;

  @ApiProperty()
  type: IpType;

  @ApiProperty()
  continent: string;

  @ApiProperty()
  continent_code: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  country_code: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  region_code: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  is_eu: boolean;

  @ApiProperty()
  postal: string;

  @ApiProperty()
  calling_code: string;

  @ApiProperty()
  capital: string;

  @ApiProperty()
  borders: string;

  @ApiProperty({ type: FlagEntity })
  flag: FlagEntity;

  @ApiProperty({ type: ConnectionEntity })
  connection: ConnectionEntity;

  @ApiProperty({ type: TimezoneEntity })
  timezone: TimezoneEntity;

  @ApiProperty({ type: CurrencyEntity })
  currency: CurrencyEntity;

  @ApiProperty({ type: SecurityEntity })
  security: SecurityEntity;
}
