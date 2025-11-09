import { ObjectType, Field, HideField, Int, ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Lists } from './lists.entity';
import { MediaCache } from 'src/media/entities/media-cache.entity';
import { WatchHistory } from 'src/analytics/entities/watch-history.entity';

@ObjectType()
export class ListItem {
  @Field(() => ID)
  id: string;

  @HideField()
  list_id: string;

  @HideField()
  media_id: string;

  @Field(() => GraphQLJSON, { nullable: true })
  progress: any;

  @Field(() => Int)
  watch_count: number;

  @Field({ nullable: true })
  last_watched_at?: Date;

  @Field()
  last_updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => Lists, { nullable: true })
  list?: Lists;

  @Field(() => MediaCache, { nullable: true })
  media?: MediaCache;

  @Field(() => [WatchHistory], { nullable: true })
  watch_history?: WatchHistory[];
}
