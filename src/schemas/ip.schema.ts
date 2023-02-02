import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IpEntity } from 'src/ips/entities/io';
import { IpType } from 'src/types/ip';
import { Connection } from './connect.schema';
import { Currency } from './currency.schema';
import { Flag } from './flag.schema';
import { Security } from './security.schema';
import { Timezone } from './timezone.schema';

export type IpDocument = HydratedDocument<Ip>;

@Schema()
export class Ip implements IpEntity {
  @Prop({ unique: true })
  ip: string;

  @Prop()
  success: boolean;

  @Prop()
  message?: string;

  @Prop()
  type: IpType;

  @Prop()
  continent: string;

  @Prop()
  continent_code: string;

  @Prop()
  country: string;

  @Prop()
  country_code: string;

  @Prop()
  region: string;

  @Prop()
  region_code: string;

  @Prop()
  city: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  is_eu: boolean;

  @Prop()
  postal: string;

  @Prop()
  calling_code: string;

  @Prop()
  capital: string;

  @Prop()
  borders: string;

  @Prop()
  flag: Flag;

  @Prop()
  connection: Connection;

  @Prop()
  timezone: Timezone;

  @Prop()
  currency: Currency;

  @Prop()
  security: Security;
}

export const IpSchema = SchemaFactory.createForClass(Ip);
