import { Injectable, BadRequestException } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {

    getPlaces() {
        return "Rota que lista os lugares";
    }

    getById(id: number) {
        return "Lugar com o ID: " + id;
    }

    save(data: CreatePlaceDto) {

        if (!data.city) {
            throw new BadRequestException("Informe a cidade.");
        }

        return {
            message: "Criando um novo lugar",
            data,
        };

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