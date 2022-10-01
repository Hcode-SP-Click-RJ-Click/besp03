import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateLoginDto {
    @IsNotEmpty({
        message: 'Informe o email.',
    })
    @IsEmail({}, {
        message: 'Informe um email válido.',
    })
    email: string;
    
    @IsNotEmpty({
        message: 'Informe a senha.',
    })
    password: string;

}
