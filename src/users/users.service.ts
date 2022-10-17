import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService, // private authService: AuthService,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    // return `This action returns all users`;
    return this.prisma.user.findMany();
  }

  findOneById(id: number) {
    return `This action returns a #${id} user`;
    // return this.prisma.user.findUnique({ where: { id } });
  }
  findOneByName(username: string) {
    return this.prisma.user.findFirst({ where: { username } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  async register(createUserDto: CreateUserDto, acc: any) {
    const { access_token } = acc;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = await bcrypt.hash(createUserDto.password, salt);
    const data = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashPassword,
      },
    });
    return { data: data, accessToken: access_token };
  }
  async signin(user: any, jwtToken: string) {
    const userQuery = await this.prisma.user.findFirst({
      where: { username: user.username },
      select: { password: true },
    });
    if (!userQuery) {
      throw new NotFoundException('error username or password is incorrect');
    } else {
      return { access_token: jwtToken };
    }
  }
}
