import { Module } from '@nestjs/common';
import { TvService } from './tv.service';
import {
  TvSeasonResolver,
  TvEpisodeResolver,
  EpisodeProgressResolver,
} from './tv.resolver';

@Module({
  providers: [
    TvSeasonResolver,
    TvEpisodeResolver,
    EpisodeProgressResolver,
    TvService,
  ],
})
export class TvModule {}
