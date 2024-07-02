import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY, IUserRepository } from '../../../database/user';
import { User, CreateUserDto } from '../index';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async create(userDto: CreateUserDto): Promise<User> {

    console.log(userDto);


    return {} as User;
    /* return this.userRepository.create({
      ...userDto,
      id: null,
    }); */
  }

  async update(id: string, userDto: CreateUserDto): Promise<User> {
    return this.userRepository.update(id, {
      ...userDto,
    });
  }

  async delete(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
