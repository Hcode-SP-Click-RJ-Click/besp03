import { Controller, Get, Param } from '@nestjs/common';
import { PlacesService } from './places.service';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {

    constructor(private service: PlacesService) {}

    // http://localhost:3000/places
    @Get()
    listPlaces() {
        return this.service.getPlaces();
    }

    // http://localhost:3000/places/45
    @Get(':id')
    showPlace(@Param('id') placeId) {
        return this.service.getById(placeId);
    }

}