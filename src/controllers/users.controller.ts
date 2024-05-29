import {Get, JsonController, Param} from "routing-controllers";
import {Service} from "typedi";
import {UsersService} from "../services/users.service";
import {User} from "../entities/user.entity";

@JsonController('/users')
@Service()
export class UserController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async index() {
        return {};
    }

    @Get('/:id')
    show(@Param('id') id: number): Promise<User | null> {
        return this.usersService.getById(id);
    }
}