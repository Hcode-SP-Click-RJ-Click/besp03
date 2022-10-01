import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtGuard implements CanActivate {

    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request = context.switchToHttp().getRequest();
        const Authorization = request.headers['authorization'];

        if (!Authorization) {
            throw new UnauthorizedException('Informe o token de autenticação.');
        }

        try {

            const token = Authorization.split(' ')[1];

            this.jwtService.verify(token);

            return true;

        } catch (e) {
            throw new UnauthorizedException('Não autorizado.');
        }

    }

}