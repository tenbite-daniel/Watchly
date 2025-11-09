import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { MediaCache } from 'src/media/entities/media-cache.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Ratings {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  media_id: string;

  @Field(() => Int)
  rating: number;

  @Field({ nullable: true })
  review_text?: string;

  @Field(() => Boolean)
  contains_spoilers: boolean;

  @Field()
  last_updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => MediaCache, { nullable: true })
  media?: MediaCache;
}
