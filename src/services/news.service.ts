import {Service} from "typedi";
import {Repository} from "typeorm";
import {dataSource} from "../database";
import {News} from "../entities/news.entity";

@Service()
export class NewsService {
    private readonly newsRepository: Repository<News> = dataSource.getRepository(News);

    async getById(id: number) {
        return this.newsRepository.findOneBy({
            id
        });
    }

    async getAll() {
        return this.newsRepository.find();
    }

    async create(news: News) {
        return this.newsRepository.save(news);
    }

    async updateById(id: number, news: News) {
        return this.newsRepository.update(id, news);
    }

    async deleteById(id: number) {
        return this.newsRepository.delete(id);
    }
}