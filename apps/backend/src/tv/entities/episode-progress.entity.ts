import { ObjectType, Field, HideField, Int, ID } from '@nestjs/graphql';
import { TvEpisode } from './tv-episode.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class EpisodeProgress {
  @Field(() => ID)
  id: string;

  @HideField()
  user_id: string;

  @HideField()
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

  @Field(() => TvEpisode, { nullable: true })
  episode: TvEpisode;

  @Field(() => User, { nullable: true })
  user?: User;
}
