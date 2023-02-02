import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TimezoneEntity } from 'src/ips/entities/timezone';

export type TimezoneDocument = HydratedDocument<Timezone>;

@Schema()
export class Timezone implements TimezoneEntity {
  @Prop()
  id: string;

  @Prop()
  abbr: string;

  @Prop({ type: String })
  is_dst: number | boolean;

  @Prop()
  offset: number;

  @Prop()
  current_time: string;
}

export const TimezoneSchema = SchemaFactory.createForClass(Timezone);
