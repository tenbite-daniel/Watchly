import { ObjectType, Field, Float, Int, ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ListItem } from 'src/content/entities/list-item.entity';
import { Notes } from 'src/content/entities/notes.entity';
import { Ratings } from 'src/content/entities/ratings.entity';
import { TvSeason } from 'src/tv/entities/tv-season.entity';

@ObjectType()
export class MediaCache {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  original_title?: string;

  @Field({ nullable: true })
  tagline?: string;

  @Field({ nullable: true })
  poster_path?: string;

  @Field({ nullable: true })
  backdrop_path?: string;

  @Field({ nullable: true })
  release_date?: Date;

  @Field({ nullable: true })
  first_air_date?: Date;

  @Field({ nullable: true })
  overview?: string;

  @Field({ nullable: true })
  status?: string;

  @Field(() => Float, { nullable: true })
  popularity?: number;

  @Field(() => Float, { nullable: true })
  vote_average?: number;

  @Field(() => Int, { nullable: true })
  vote_count?: number;

  @Field({ nullable: true })
  original_language?: string;

  @Field(() => Boolean, { nullable: true })
  adult?: boolean;

  @Field(() => GraphQLJSON, { nullable: true })
  genres?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  production_companies?: any;

  @Field(() => Int, { nullable: true })
  runtime?: number;

  @Field(() => Int, { nullable: true })
  number_of_seasons?: number;

  @Field(() => Int, { nullable: true })
  number_of_episodes?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  episode_run_time?: any;

  @Field(() => Boolean, { nullable: true })
  in_production?: boolean;

  @Field({ nullable: true })
  last_air_date?: Date;

  @Field(() => GraphQLJSON, { nullable: true })
  trailer_urls?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  external_ids?: any;

  @Field(() => Boolean)
  is_manual_entry: boolean;

  @Field()
  source_api: string;

  @Field()
  last_fetched_at: Date;

  @Field()
  created_at: Date;

  @Field(() => [TvSeason], { nullable: true })
  tv_seasons: TvSeason[];

  @Field(() => [ListItem], { nullable: true })
  list_items?: ListItem[];

  @Field(() => [Ratings], { nullable: true })
  ratings?: Ratings[];

  @Field(() => [Notes], { nullable: true })
  notes?: Notes[];
}
