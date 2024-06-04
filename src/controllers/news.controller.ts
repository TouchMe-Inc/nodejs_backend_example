import {Body, Delete, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {plainToClass} from "class-transformer";
import {Service} from "typedi";
import {NewsService} from "../services/news.service";
import {News} from "../entities/news.entity";
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
    async show(@Param('id') id: number): Promise<News | null> {
        return this.newsService.getById(id);
    }

    @Post()
    async create(@Body({validate: true}) createDto: NewsDto) {
        const news = plainToClass(News, createDto)

        return this.newsService.create(news);
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body({validate: true}) updateDto: NewsDto) {
        const news = plainToClass(News, updateDto)

        return this.newsService.updateById(id, news);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        return this.newsService.deleteById(id);
    }
}