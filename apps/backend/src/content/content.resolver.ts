import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  ListService,
  ListItemService,
  RatingService,
  NotesService,
} from './content.service';
import { Lists } from './entities/lists.entity';
import { ListItem } from './entities/list-item.entity';
import { Ratings } from './entities/ratings.entity';
import { Notes } from './entities/notes.entity';

@Resolver(() => Lists)
export class ListResolver {
  constructor(private readonly contentService: ListService) {}

  @Query(() => [Lists], { name: 'lists' })
  findAll() {
    return this.contentService.findAll();
  }
}
@Resolver(() => ListItem)
export class ListItemResolver {
  constructor(private readonly contentService: ListItemService) {}

  @Query(() => [ListItem], { name: 'listItems' })
  findAll() {
    return this.contentService.findAll();
  }
}
@Resolver(() => Ratings)
export class RatingsResolver {
  constructor(private readonly contentService: RatingService) {}

  @Query(() => [Ratings], { name: 'ratings' })
  findAll() {
    return this.contentService.findAll();
  }
}
@Resolver(() => Notes)
export class NotesResolver {
  constructor(private readonly contentService: NotesService) {}

  @Query(() => [Notes], { name: 'notes' })
  findAll() {
    return this.contentService.findAll();
  }
}
