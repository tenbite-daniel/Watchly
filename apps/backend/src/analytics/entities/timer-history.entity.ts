import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { TimerSession } from './timer-session.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class TimerHistory {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  session_id: string;

  @Field(() => Int)
  seconds_used: number;

  @Field()
  activity_date: Date;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => TimerSession)
  session: TimerSession;
}
