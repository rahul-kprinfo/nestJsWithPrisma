import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
