import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto, FindServiceByIdDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  create(createServiceDto: CreateServiceDto) {
    return this.prisma.services.create({ data: createServiceDto });
  }

  async findAll() {
    try {
      const services = await this.prisma.services.findMany();
      if (!services) {
        throw new NotFoundException('no service available');
      }
      return [
        ...services.map((item) => ({
          _id: item.serviceId,
          name: item.name,
          price: item.price,
          picture: item.picture,
          description: item.description,
        })),
      ];
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async findOne(id: string) {
    const service = await this.prisma.services.findFirst({
      where: { serviceId: id },
    });
    if (!service) {
      throw new NotFoundException(`Service with '${id}' not found`);
    }
    return this.prisma.services.findFirst({ where: { serviceId: id } });
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  async remove(id: string) {
    try {
      const remove = await this.prisma.services.delete({
        where: { serviceId: id },
      });
      if (!remove) {
        throw new NotFoundException(`${id} was deleted or not exist`);
      }
      return 'Delete Success';
    } catch (e) {
      throw new NotFoundException(`${id} was deleted or not exist`);
    }
  }
  async bookingService(serviceId: string, username: string) {
    console.log(serviceId, username);
    await this.prisma.orders.create({
      data: {
        username: username,
        servicesId: serviceId,
      },
    });
    return 'Order Sucess';
  }
}
