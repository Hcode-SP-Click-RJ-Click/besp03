import { Module } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: `${process.env.JWT_EXPIRES_IN}s`,
          },
        }),
    ],
    controllers: [PlacesController],
    providers: [
        PlacesService,
        PrismaService,
        CategoriesService,
    ],
})
export class PlacesModule {}