import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class SyncConflicts {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  entity_type: string;

  @Field()
  entity_id: string;

  @Field(() => GraphQLJSON)
  conflict_data: any;

  @Field({ nullable: true })
  resolved_by?: string;

  @Field({ nullable: true })
  resolution?: string;

  @Field()
  resolved_at: Date;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => User, { nullable: true })
  resolver?: User;
}
