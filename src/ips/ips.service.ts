import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash';
import { Model } from 'mongoose';
import { HttpService } from 'nestjs-http-promise';
import { Ip, IpDocument } from 'src/schemas/ip.schema';
import { GetIpInfoQueryParamsDto } from './dto/get-ip-info-query-params.dto';
import { IpEntity } from './entities/io';

@Injectable()
export class IpsService {
  private url: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    @InjectModel(Ip.name) private ipModel: Model<IpDocument>,
  ) {
    this.url = configService.get<string>('THIRD_PARTY_URL');
  }

  async getIpInfo({
    ip,
    ...params
  }: GetIpInfoQueryParamsDto): Promise<IpEntity> {
    let result = await this.ipModel.findOne({ ip });

    if (!result) {
      const response = await this.httpService.get(
        `${this.url}${ip}?${this.paramsToQueryString(params)}`,
      );

      const data = response.data;
      result = await this.ipModel.create(data);
    }

    return _.omit(result, ['__id', '__v']);
  }

  async removeCache(ip: string) {
    const cacheData = await this.ipModel.findOne({ ip });

    if (cacheData) {
      await this.ipModel.deleteOne({ ip });

      return true;
    }

    return false;
  }

  paramsToQueryString(params: object) {
    const queryParts = Object.entries(params).map(
      ([key, value]) => `${key}=${value}`,
    );
    const queryString = queryParts.join('&');

    return queryString;
  }
}
