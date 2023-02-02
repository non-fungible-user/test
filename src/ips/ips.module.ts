import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from 'nestjs-http-promise';
import { Ip, IpSchema } from 'src/schemas/ip.schema';
import { IpsController } from './ips.controller';
import { IpsService } from './ips.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Ip.name, schema: IpSchema }]),
  ],
  providers: [IpsService],
  controllers: [IpsController],
})
export class IpsModule {}
