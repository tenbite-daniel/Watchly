import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from './entities/media.entity';

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [Media], { name: 'media' })
  findAll() {
    return this.mediaService.findAll();
  }
}
