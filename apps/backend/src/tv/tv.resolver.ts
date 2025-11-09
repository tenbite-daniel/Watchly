import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TvService } from './tv.service';
import { TvSeason } from './entities/tv-season.entity';
import { TvEpisode } from './entities/tv-episode.entity';
import { EpisodeProgress } from './entities/episode-progress.entity';

@Resolver(() => TvSeason)
export class TvSeasonResolver {
  constructor(private readonly tvService: TvService) {}
  @Query(() => [TvSeason], { name: 'tvSeason' })
  findAll() {
    return this.tvService.findAll();
  }
}

@Resolver(() => TvEpisode)
export class TvEpisodeResolver {
  constructor(private readonly tvService: TvService) {}
  @Query(() => [TvEpisode], { name: 'tvEpisode' })
  findAll() {
    return this.tvService.findAll();
  }
}

@Resolver(() => EpisodeProgress)
export class EpisodeProgressResolver {
  constructor(private readonly tvService: TvService) {}
  @Query(() => [EpisodeProgress], { name: 'episodeProgress' })
  findAll() {
    return this.tvService.findAll();
  }
}
