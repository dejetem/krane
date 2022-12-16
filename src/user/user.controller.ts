import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('all')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('new')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}
