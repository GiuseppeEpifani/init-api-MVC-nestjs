import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceUserRepository, User, USER_REPOSITORY, UserSchema } from '../../database/user';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: ServiceUserRepository,
    },
  ],
  exports: [
    UserService, 
    USER_REPOSITORY
  ],
})
export class UserModule {}
