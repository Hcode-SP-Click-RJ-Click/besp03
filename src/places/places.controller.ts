import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlacesService } from './places.service';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {

    constructor(private service: PlacesService) {}

    // http://localhost:3000/places - GET
    @Get()
    listPlaces() {
        return this.service.getPlaces();
    }

    // http://localhost:3000/places/45
    @Get(':id')
    showPlace(@Param('id') placeId: number) {
        return this.service.getById(placeId);
    }

    // http://localhost:3000/places - POST
    @Post()
    createPlace(@Body() data: CreatePlaceDto) {
        return this.service.save(data);
    }

    // http://localhost:3000/places/50 - PATCH
    @Patch(':id')
    updatePlace(
        @Param('id') id: number,
        @Body() data: UpdatePlaceDto,
    ) {
        return this.service.update(id, data);
    }

    // http://localhost:3000/places/50 - DELETE
    @Delete(':id')
    removePlace(@Param('id') id: number) {
        return this.service.remove(id);
    }

}