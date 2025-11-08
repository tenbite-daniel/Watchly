import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {
  UserResolver,
  UserSettingsResolver,
  UserDevicesResolver,
} from './user.resolver';

@Module({
  providers: [
    UserResolver,
    UserSettingsResolver,
    UserDevicesResolver,
    UserService,
  ],
})
export class UserModule {}
