import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { ListItem } from 'src/content/entities/list-item.entity';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class WatchHistory {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  list_item_id: string;

  @Field()
  activity_type: string;

  @Field(() => GraphQLJSON, { nullable: true })
  progress_data?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field({ nullable: true })
  device_type?: string;

  @Field(() => Int, { nullable: true })
  session_duration?: number;

  @Field({ nullable: true })
  platform?: string;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => ListItem)
  list_item: ListItem;
}
