import { Module } from '@nestjs/common';
import { TvService } from './tv.service';
import { TvResolver } from './tv.resolver';

@Module({
  providers: [TvResolver, TvService],
})
export class TvModule {}
