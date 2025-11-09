import { ObjectType, Field, HideField, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { ListItem } from './list-item.entity';

@ObjectType()
export class Lists {
  @Field(() => ID)
  id: string;

  @HideField()
  user_id: string;

  @Field()
  list_type: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Boolean)
  is_public: boolean;

  @Field()
  sort_order: string;

  @Field()
  last_updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [ListItem], { nullable: true })
  list_items?: ListItem[];
}
