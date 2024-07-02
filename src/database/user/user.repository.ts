import { User } from "src/features/user";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  create(user: User): Promise<User>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<void>;
}

export const USER_REPOSITORY  = Symbol('UserRepository');