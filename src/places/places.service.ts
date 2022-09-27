import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {

    getPlaces() {
        return "Rota que lista os lugares";
    }

    getById(id: number) {
        return "Lugar com o ID: " + id;
    }

}