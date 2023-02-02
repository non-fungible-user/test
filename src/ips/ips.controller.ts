import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetIpInfoQueryParamsDto } from './dto/get-ip-info-query-params.dto';
import { IpEntity } from './entities/io';
import { IpsService } from './ips.service';

@ApiTags('ips')
@Controller('ips')
export class IpsController {
  constructor(private readonly ipsService: IpsService) {}

  @ApiOkResponse({
    description: 'IP info',
    type: IpEntity,
    isArray: false,
  })
  @Get('get-ip-info')
  async getIpInfo(@Query() queryParams: GetIpInfoQueryParamsDto) {
    return this.ipsService.getIpInfo(queryParams);
  }

  @ApiOkResponse({
    description: 'IP info',
    type: Boolean,
    isArray: false,
  })
  @Get('removeCache/:ip')
  async removeCache(@Param('ip') ip: string) {
    return this.ipsService.removeCache(ip);
  }
}
