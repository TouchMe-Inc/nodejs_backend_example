import {IsString, MinLength} from 'class-validator';

export class AuthDto {
    @IsString()
    login!: string;

    @MinLength(6)
    @IsString()
    password!: string;
}