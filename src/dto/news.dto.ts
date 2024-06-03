import {IsString} from 'class-validator';

export class NewsDto {
    @IsString()
    title!: string;

    @IsString()
    body!: string;
}