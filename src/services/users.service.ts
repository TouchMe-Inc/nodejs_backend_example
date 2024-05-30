import {Service} from "typedi";
import {Repository} from "typeorm";
import {dataSource} from "../database";
import {User} from "../entities/user.entity";

@Service()
export class UsersService {
    private readonly userRepository: Repository<User> = dataSource.getRepository(User);

    getById(id: number) {
        return this.userRepository.findOneBy({
            id
        });
    }

    getAll() {
        return this.userRepository.find();
    }

    create(user: User) {
        return this.userRepository.save(user);
    }

    updateById(id: number, user: User) {
        return this.userRepository.update(id, user);
    }

    deleteById(id: number) {
        return this.userRepository.delete(id);
    }
}