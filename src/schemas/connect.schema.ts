import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ConnectionEntity } from 'src/ips/entities/connection';

export type ConnectionDocument = HydratedDocument<Connection>;

@Schema()
export class Connection implements ConnectionEntity {
  @Prop()
  asn: number;

  @Prop()
  org: string;

  @Prop()
  isp: string;

  @Prop()
  domain: string;
}

export const ConnectionSchema = SchemaFactory.createForClass(Connection);
