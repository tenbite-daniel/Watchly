import { Module } from '@nestjs/common';
import {
  ListService,
  ListItemService,
  RatingService,
  NotesService,
} from './content.service';
import {
  ListResolver,
  ListItemResolver,
  RatingsResolver,
  NotesResolver,
} from './content.resolver';

@Module({
  providers: [
    ListResolver,
    ListItemResolver,
    RatingsResolver,
    NotesResolver,
    ListService,
    ListItemService,
    RatingService,
    NotesService,
  ],
})
export class ContentModule {}
