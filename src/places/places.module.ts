import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
    controllers: [PlacesController],
    providers: [PlacesService, PrismaService],
})
export class PlacesModule {}