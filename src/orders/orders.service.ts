import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  async findAll() {
    // return this.prisma.orders.findMany({
    //   include: {
    //     services: true, // Return all fields
    //   },
    // });
    return this.prisma.orders.findMany();
    // const orders = await this.prisma.orders.findMany();
    // const a = orders.map(
    //   async (item) =>
    //     await this.prisma.services
    //       .findUnique({
    //         where: { serviceId: item.servicesId },
    //       })
    //       .then((item) => {
    //         return item;
    //       }),
    // );
    // const data = await this.prisma.services.findMany({
    //   where: orders.map((item) => item.servicesId),
    // });
    // return a;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return this.prisma.orders.delete({ where: { id } });
  }
  async findUserWithOrders(user: any) {
    const orderWithUser = await this.prisma.orders.findMany({
      where: { username: user.username },
    });

    const a = await this.prisma.user.findFirst({
      where: { username: user.username },
    });
    const userInfo = {
      customer: {
        _id: a.id,
        fullName: a.fullName,
        username: a.username,
      },
    };

    const serviceList = [];
    orderWithUser.map((item) => serviceList.push(item.servicesId));
    const services = await this.prisma.services.findMany({
      where: {
        serviceId: {
          in: serviceList,
        },
      },
    });
    const zz = orderWithUser.map((item, idx) => ({
      id: item.id,
      service: services.filter((el) => item.servicesId === el.serviceId)[0],
      ...userInfo,
      createdAt: item.createdAt,
    }));

    return zz;
  }
}
