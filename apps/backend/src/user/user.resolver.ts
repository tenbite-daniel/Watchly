import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserSettings } from './entities/user-settings.entity';
import { UserDevices } from './entities/user-devices.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }
}

@Resolver(() => UserSettings)
export class UserSettingsResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserSettings], { name: 'userSettings' })
  findAll() {
    return this.userService.findAll();
  }
}

@Resolver(() => UserDevices)
export class UserDevicesResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDevices], { name: 'userDevices' })
  findAll() {
    return this.userService.findAll();
  }
}
