import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    // create(@Body('name') name: string) {
    // console.log(createServiceDto);
    console.log(createServiceDto);

    // return this.servicesService.create(createServiceDto);
  }

  @Get('')
  async viewAllService() {
    return this.servicesService.findAll();
  }

  // @Get()
  // findAll() {
  //   return this.servicesService.findAll();
  // }

  @Get(':_id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(id);
  }
  @Delete('all')
  removeAll(@Param('id') id: string) {
    // return this.servicesService.removeAll();
  }

  @Post(':serviceId/booking')
  @UseGuards(JwtAuthGuard)
  async bookService(@Param('serviceId') serviceId: string, @Req() req) {
    return this.servicesService.bookingService(serviceId, req.user.username);
  }
}
