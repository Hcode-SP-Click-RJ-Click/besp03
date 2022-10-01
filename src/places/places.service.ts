import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {

    constructor(
        private database: PrismaService,
        private categoriesService: CategoriesService,
    ) {}

    getPlaces() {
        return this.database.places.findMany({
            include: {
                categories: true,
            },
        });
    }

    async getById(id: number) {

        if (isNaN(Number(id))) {
            throw new BadRequestException('ID do lugar inválido.');
        }

        id = Number(id);
        
        const place = await this.database.places.findUnique({
            include: {
                categories: true,
            },
            where: {
                id,
            },
        });

        if (!place) {
            throw new NotFoundException('Lugar não encontrado');
        }

        return place;

    }

    async save(data: CreatePlaceDto) {

        data.categoryId = Number(data.categoryId);

        await this.categoriesService.findOne(data.categoryId);

        return this.database.places.create({
            data,
        });

    }

    async update(placeId: number, data: UpdatePlaceDto) {

        await this.getById(placeId);

        if (data.categoryId) {
            await this.categoriesService.findOne(data.categoryId);

            data.categoryId = Number(data.categoryId);
        }

        return this.database.places.update({
            data,
            where: {
                id: Number(placeId),
            },
        });

    }

    async remove(placeId: number) {

        await this.getById(placeId);

        return this.database.places.delete({
            where: {
                id: +placeId,
            },
        });

    }

}