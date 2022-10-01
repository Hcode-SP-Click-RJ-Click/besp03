import { Controller, Get, Param, Post, Body, Patch, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlacesService } from './places.service';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {

    constructor(private service: PlacesService) {}

    // http://localhost:3000/places - GET
    @UseGuards(JwtGuard)
    @Get()
    listPlaces() {
        return this.service.getPlaces();
    }

    // http://localhost:3000/places/45
    @UseGuards(JwtGuard)
    @Get(':id')
    showPlace(@Param('id') placeId: number) {
        return this.service.getById(Number(placeId));
    }

    // http://localhost:3000/places - POST
    @UseGuards(JwtGuard)
    @Post()
    createPlace(@Body() data: CreatePlaceDto) {
        return this.service.save(data);
    }

    // http://localhost:3000/places/50 - PATCH
    @UseGuards(JwtGuard)
    @Patch(':id')
    updatePlace(
        @Param('id') id: number,
        @Body() data: UpdatePlaceDto,
    ) {
        return this.service.update(id, data);
    }

    // http://localhost:3000/places/50 - DELETE
    @UseGuards(JwtGuard)
    @Delete(':id')
    removePlace(@Param('id') id: number) {
        return this.service.remove(id);
    }

}