import {Get, JsonController, Param} from "routing-controllers";
import {Service} from "typedi";
import {NewsService} from "../services/news.service";
import {News} from "../entities/news.entity";

@JsonController('/news')
@Service()
export class NewsController {
    constructor(private readonly newsService: NewsService) {
    }

    @Get()
    async index() {
        return {};
    }

    @Get('/:id')
    show(@Param('id') id: number): Promise<News | null> {
        return this.newsService.getById(id);
    }
}