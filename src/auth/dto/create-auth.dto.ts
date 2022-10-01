import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({
        message: 'Informe o nome.',
    })
    name: string;
    
    @IsNotEmpty({
        message: 'Informe o email.',
    })
    email: string;
    
    @IsNotEmpty({
        message: 'Informe a senha.',
    })
    password: string;
}
