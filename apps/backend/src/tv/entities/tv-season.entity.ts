import { ObjectType, Field, HideField, Int, ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { MediaCache } from 'src/media/entities/media-cache.entity';
import { TvEpisode } from './tv-episode.entity';

@ObjectType()
export class TvSeason {
  @Field(() => ID)
  id: string;

  @HideField()
  media_id: string;

  @Field(() => Int)
  season_number: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  overview?: string;

  @Field({ nullable: true })
  air_date?: Date;

  @Field(() => Int, { nullable: true })
  episode_count?: number;

  @Field({ nullable: true })
  poster_path?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  season_data?: any;

  @Field()
  updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => MediaCache)
  media: MediaCache;

  @Field(() => [TvEpisode], { nullable: true })
  episodes: TvEpisode[];
}
