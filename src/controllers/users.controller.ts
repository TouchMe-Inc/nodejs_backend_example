import {Body, Delete, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {plainToClass} from 'class-transformer';
import {Service} from "typedi";
import {UsersService} from "../services/users.service";
import {User} from "../entities/user.entity";
import {UserDto} from "../dto/user.dto";
import {PasswordService} from "../services/password";

@JsonController('/users')
@Service()
export class UserController {
    constructor(private readonly usersService: UsersService, private readonly passwordService: PasswordService) {
    }

    @Get()
    async index() {
        return this.usersService.getAll();
    }

    @Get('/:id')
    async show(@Param('id') id: number): Promise<User | null> {
        return this.usersService.getById(id);
    }

    @Post()
    async create(@Body({validate: true}) createDto: UserDto) {
        const user = plainToClass(User, createDto);
        user.password = this.passwordService.hash(user.password)

        return this.usersService.create(user);
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body({validate: true}) updateDto: UserDto) {
        const user = plainToClass(User, updateDto)

        return this.usersService.updateById(id, user);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        return this.usersService.deleteById(id);
    }
}