import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUser(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        name: dto.name,
      },
    });
    if (user) {
      throw new HttpException('name already exists', HttpStatus.BAD_REQUEST);
    }

    const myUser = await this.prisma.user.create({
      data: {
        ...dto,
      },
    });
    return myUser;
  }

  async getUsers() {
    const Alluser = await this.prisma.user.findMany({});
    const all = Alluser.sort((a, b) => b.highscore - a.highscore).slice(0, 10);
    return all;
  }
}
