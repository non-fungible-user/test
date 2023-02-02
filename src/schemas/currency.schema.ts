import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CurrencyEntity } from 'src/ips/entities/currency';

export type CurrencyDocument = HydratedDocument<Currency>;

@Schema()
export class Currency implements CurrencyEntity {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  symbol: string;

  @Prop()
  plural: string;

  @Prop()
  exchange_rate: string;
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
