import {Service} from "typedi";
import {Repository} from "typeorm";
import {dataSource} from "../database";
import {User} from "../entities/user.entity";

@Service()
export class UsersService {
    private readonly userRepository: Repository<User> = dataSource.getRepository(User);

    async getById(id: number) {
        return this.userRepository.findOneBy({
            id
        });
    }

    async getByLogin(login: string) {
        return this.userRepository.findOneBy({
            login
        });
    }

    async getByLoginWithPassword(login: string) {
        return this.userRepository.findOne({
            select: {
                id: true,
                login: true,
                password: true
            },
            where: {
                login
            }
        })
    }

    async getAll() {
        return this.userRepository.find();
    }

    async create(user: User) {
        return this.userRepository.save(user);
    }

    async  updateById(id: number, user: User) {
        return this.userRepository.update(id, user);
    }

    async deleteById(id: number) {
        return this.userRepository.delete(id);
    }
}