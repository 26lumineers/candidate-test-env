import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  picture: string;
  @ApiProperty()
  description: string;
}

export class FindServiceByIdDto {
  @ApiProperty()
  id: number;
}
