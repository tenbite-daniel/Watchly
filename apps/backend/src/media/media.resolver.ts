import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { MediaCache } from './entities/media-cache.entity';
import { GenresCache } from './entities/genres-cache.entity';
import { MediaCollection } from './entities/media-collection.entity';
import { SearchCache } from './entities/search-cache.entity';
import { PeopleCache } from './entities/people-cache.entity';

@Resolver(() => MediaCache)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [MediaCache], { name: 'media' })
  findAll() {
    return this.mediaService.findAll();
  }
}

@Resolver(() => GenresCache)
export class GenreResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [GenresCache], { name: 'genre' })
  findAll() {
    return this.mediaService.findAll();
  }
}

@Resolver(() => MediaCollection)
export class MediaCollectionResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [MediaCollection], { name: 'mediaCollection' })
  findAll() {
    return this.mediaService.findAll();
  }
}
@Resolver(() => SearchCache)
export class SearchResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [SearchCache], { name: 'search' })
  findAll() {
    return this.mediaService.findAll();
  }
}
@Resolver(() => PeopleCache)
export class PeopleResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [PeopleCache], { name: 'people' })
  findAll() {
    return this.mediaService.findAll();
  }
}
