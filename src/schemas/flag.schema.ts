import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FlagEntity } from 'src/ips/entities/flag';

export type FlagDocument = HydratedDocument<Flag>;

@Schema()
export class Flag implements FlagEntity {
  @Prop()
  img: string;

  @Prop()
  emoji: string;

  @Prop()
  emoji_unicode: string;
}

export const FlagSchema = SchemaFactory.createForClass(Flag);
