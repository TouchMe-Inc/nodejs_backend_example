import {IsString, MinLength} from 'class-validator';

export class UserDto {
    @IsString()
    login!: string;

    @IsString()
    @MinLength(6)
    password!: string;

    @IsString()
    role!:string;
}