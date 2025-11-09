import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import { TimerHistory } from './timer-history.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class TimerSession {
  @Field(() => ID)
  id: string;

  @HideField()
  user_id: string;

  @Field(() => Int)
  total_seconds: number;

  @Field(() => Int)
  remaining_seconds: number;

  @Field(() => Boolean)
  is_paused: boolean;

  @Field({ nullable: true })
  last_started_at?: Date;

  @Field()
  daily_reset_time: string;

  @Field()
  updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => [TimerHistory], { nullable: true })
  timer_history?: TimerHistory[];
}
