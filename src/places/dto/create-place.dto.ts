import { IsNotEmpty } from 'class-validator';

export class CreatePlaceDto {
    @IsNotEmpty({
        message: 'Informe a categoria.',
    })
    categoryId: number;
    
    @IsNotEmpty({
        message: 'Informe o nome.',
    })
    name: string;
    
    @IsNotEmpty({
        message: 'Informe o endereço.',
    })
    address: string;
    
    @IsNotEmpty({
        message: 'Informe o número.',
    })
    number: string;
    complement: string;
    
    @IsNotEmpty({
        message: 'Informe a cidade.',
    })
    city: string;
    
    @IsNotEmpty({
        message: 'Informe o estado.',
    })
    state: string;
    
    @IsNotEmpty({
        message: 'Informe o país.',
    })
    country: string;
}