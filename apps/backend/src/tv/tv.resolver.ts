import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TvService } from './tv.service';
import { Tv } from './entities/tv.entity';
import { CreateTvInput } from './dto/create-tv.input';
import { UpdateTvInput } from './dto/update-tv.input';

@Resolver(() => Tv)
export class TvResolver {
  constructor(private readonly tvService: TvService) {}

  @Mutation(() => Tv)
  createTv(@Args('createTvInput') createTvInput: CreateTvInput) {
    return this.tvService.create(createTvInput);
  }

  @Query(() => [Tv], { name: 'tv' })
  findAll() {
    return this.tvService.findAll();
  }

  @Query(() => Tv, { name: 'tv' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tvService.findOne(id);
  }

  @Mutation(() => Tv)
  updateTv(@Args('updateTvInput') updateTvInput: UpdateTvInput) {
    return this.tvService.update(updateTvInput.id, updateTvInput);
  }

  @Mutation(() => Tv)
  removeTv(@Args('id', { type: () => Int }) id: number) {
    return this.tvService.remove(id);
  }
}
