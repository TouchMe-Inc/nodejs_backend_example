import {Service} from "typedi";
import {Repository} from "typeorm";
import {dataSource} from "../database";
import {News} from "../entities/news.entity";

@Service()
export class NewsService {
    private readonly newsRepository: Repository<News> = dataSource.getRepository(News);

    getById(id: number) {
        return this.newsRepository.findOneBy({
            "id": id
        });
    }
}