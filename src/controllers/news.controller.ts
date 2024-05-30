import {Body, Delete, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {Service} from "typedi";
import {NewsService} from "../services/news.service";
import {News} from "../entities/news.entity";
import {UserDto} from "../dto/user.dto";
import {plainToClass} from "class-transformer";
import {User} from "../entities/user.entity";
import {NewsDto} from "../dto/news.dto";

@JsonController('/news')
@Service()
export class NewsController {
    constructor(private readonly newsService: NewsService) {
    }

    @Get()
    async index() {
        return this.newsService.getAll();
    }

    @Get('/:id')
    show(@Param('id') id: number): Promise<News | null> {
        return this.newsService.getById(id);
    }

    @Post()
    create(@Body() createDto: NewsDto) {
        const news = plainToClass(News, createDto)

        return this.newsService.create(news);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() updateDto: NewsDto) {
        const news = plainToClass(News, updateDto)

        return this.newsService.updateById(id, news);
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.newsService.getById(id);
    }
}