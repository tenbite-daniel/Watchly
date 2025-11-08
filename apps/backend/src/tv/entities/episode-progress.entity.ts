import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { TvEpisode } from './tv-episode.entity';

@ObjectType()
export class EpisodeProgress {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  episode_id: string;

  @Field(() => Int)
  last_watched_timestamp: number;

  @Field(() => Int, { nullable: true })
  episode_duration?: number;

  @Field()
  status: string;

  @Field()
  last_updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => TvEpisode)
  tv_episode: TvEpisode;
}
