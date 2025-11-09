import { ObjectType, Field, HideField, ID } from '@nestjs/graphql';
import { MediaCache } from 'src/media/entities/media-cache.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Notes {
  @Field(() => ID)
  id: string;

  @HideField()
  user_id: string;

  @HideField()
  media_id: string;

  @Field({ nullable: true })
  title?: string;

  @Field()
  content: string;

  @Field(() => Boolean)
  is_public: boolean;

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
