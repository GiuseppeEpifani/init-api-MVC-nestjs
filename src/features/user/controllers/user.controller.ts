import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { User, CreateUserDto, UserService } from '../index';
import { ResponseModel } from '../../../models/Response.model';
import { I18nContext, I18nService } from 'nestjs-i18n';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly usersService: UserService,
    private readonly i18nService: I18nService
  ) {}

  @Get()
  async findAll(): Promise<ResponseModel<User[]>> {
    try {
      const response = new ResponseModel<User[]>();
      response.message = this.i18nService.translate('messages.success.obtained', { lang: I18nContext.current()?.lang });;
      response.body = await this.usersService.findAll();
  
      return response;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.usersService.delete(id);
  }
}
