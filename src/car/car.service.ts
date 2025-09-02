import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { MysqlPrismaService } from 'src/prisma/mysql.service';

@Injectable()
export class CarService {
  constructor(private readonly prisma: MysqlPrismaService) {}
  create(createCarDto: CreateCarDto) {
    return this.prisma.car.create({ data: createCarDto });
  }

  findAll() {
    return this.prisma.car.findMany();
  }

  findOne(id: string) {
    return this.prisma.car.findUnique({ where: { id } });
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.prisma.car.update({
      where: { id },
      data: updateCarDto,
    });
  }

  remove(id: string) {
    return this.prisma.car.delete({
      where: { id }
    });
  }
}
