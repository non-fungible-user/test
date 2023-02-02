import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SecurityEntity } from 'src/ips/entities/security';

export type SecurityDocument = HydratedDocument<Security>;

@Schema()
export class Security implements SecurityEntity {
  @Prop()
  anonymous: boolean;

  @Prop()
  proxy: boolean;

  @Prop()
  vpn: boolean;

  @Prop()
  tor: boolean;

  @Prop()
  hosting: boolean;
}

export const SecuritySchema = SchemaFactory.createForClass(Security);
