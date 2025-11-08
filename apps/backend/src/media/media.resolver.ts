import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { MediaCache } from './entities/media-cache.entity';

@Resolver(() => MediaCache)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [MediaCache], { name: 'media' })
  findAll() {
    return this.mediaService.findAll();
  }
}
