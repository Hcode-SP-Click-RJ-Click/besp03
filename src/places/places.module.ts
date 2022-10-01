import { Module } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
    controllers: [PlacesController],
    providers: [
        PlacesService,
        PrismaService,
        CategoriesService,
    ],
})
export class PlacesModule {}