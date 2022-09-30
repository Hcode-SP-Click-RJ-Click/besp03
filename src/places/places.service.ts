import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {

    constructor(private database: PrismaService) {}

    getPlaces() {
        return this.database.places.findMany();
    }

    getById(id: number) {
        return "Lugar com o ID: " + id;
    }

    save(data: CreatePlaceDto) {

        data.categoryId = Number(data.categoryId);

        return this.database.places.create({
            data,
        });

    }

    update(placeId: number, data: UpdatePlaceDto) {

        return {
            message: `Atualizando o lugar com ID ${placeId}`,
            data,
        };

    }

    remove(placeId: number) {

        return {
            message: `Excluindo o lugar com ID ${placeId}`,
        };

    }

}