import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Callback, Lang, Output, Security } from 'src/types/ip';

export class GetIpInfoQueryParamsDto {
  @ApiProperty()
  @IsNotEmpty()
  ip: string;

  @ApiProperty({ required: false })
  @IsOptional()
  output: Output;

  @ApiProperty({ required: false })
  @IsOptional()
  callback: Callback;

  @ApiProperty({ required: false })
  @IsOptional()
  lang: Lang;

  @ApiProperty({ required: false })
  @IsOptional()
  security: Security;
}
