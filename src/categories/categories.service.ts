import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCategoryDto) {

    if (!data.name) {
      throw new BadRequestException('Informe o nome.');
    }

    return this.prisma.categories.create({
      data,
    });

  }

  mostrarCategorias() {
    return this.prisma.categories.findMany();
  }

  async findOne(id: number) {

    if (isNaN(Number(id))) {
      throw new BadRequestException('ID inválido.');
    }

    id = Number(id);

    const category = await this.prisma.categories.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new NotFoundException('Categoria não encontrada.');
    }

    return category;

  }

  async update(id: number, data: UpdateCategoryDto) {

    await this.findOne(id);
    
    return this.prisma.categories.update({
      data,
      where: {
        id,
      },
    });

  }

  async remove(id: number) {

    await this.findOne(id);
    
    return this.prisma.categories.delete({
      where: {
        id,
      },
    });

  }
}
