import {IsString, MinLength} from 'class-validator';

export class UserDto {
    @IsString()
    login!: string;

    @MinLength(6)
    password!: string;
}