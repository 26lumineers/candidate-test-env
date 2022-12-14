import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [PrismaModule],
})
export class ServicesModule {}
