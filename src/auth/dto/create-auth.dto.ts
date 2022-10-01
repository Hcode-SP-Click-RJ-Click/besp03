import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({
        message: 'Informe o nome.',
    })
    name: string;
    
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
    @MinLength(8, {
        message: 'A senha deve ter pelo menos oito caracteres.',
    })
    @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]))/, {
        message: 'A senha deve conter pelo menos um número, uma letra maiúscula, uma letra minúscula e um caracter especial.',
    })
    password: string;
}
