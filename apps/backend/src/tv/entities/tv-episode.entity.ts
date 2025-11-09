import { ObjectType, Field, HideField, Int, ID, Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TvSeason } from './tv-season.entity';
import { EpisodeProgress } from './episode-progress.entity';

@ObjectType()
export class TvEpisode {
  @Field(() => ID)
  id: string;

  @HideField()
  season_id: string;

  @Field(() => Int)
  episode_number: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  overview?: string;

  @Field({ nullable: true })
  air_date?: Date;

  @Field(() => Int, { nullable: true })
  runtime?: number;

  @Field({ nullable: true })
  still_path?: string;

  @Field(() => Float, { nullable: true })
  vote_average?: number;

  @Field(() => Int, { nullable: true })
  vote_count?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  episode_data?: any;

  @Field()
  updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => TvSeason)
  season: TvSeason;

  @Field(() => [EpisodeProgress], { nullable: true })
  episode_progress?: EpisodeProgress[];
}
