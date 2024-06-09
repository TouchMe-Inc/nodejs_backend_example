import {Authorized, Body, Delete, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {plainToClass} from 'class-transformer';
import {Service} from "typedi";
import {UsersService} from "../services/users.service";
import {User} from "../entities/user.entity";
import {UserDto} from "../dto/user.dto";
import {PasswordService} from "../services/password";

@JsonController('/api/v1/users')
@Service()
export class UserController {
    constructor(private readonly usersService: UsersService, private readonly passwordService: PasswordService) {
    }

    @Authorized()
    @Get()
    async index() {
        return this.usersService.getAll();
    }

    @Authorized()
    @Get('/:id')
    async show(@Param('id') id: number): Promise<User | null> {
        return this.usersService.getById(id);
    }

    @Authorized(["admin"])
    @Post()
    async create(@Body({validate: true}) createDto: UserDto) {
        const user: User = plainToClass(User, createDto);
        user.password = this.passwordService.hash(user.password)

        return this.usersService.create(user);
    }

    @Authorized(["admin"])
    @Put('/:id')
    async update(@Param('id') id: number, @Body({validate: true}) updateDto: UserDto) {
        const user: User = plainToClass(User, updateDto)

        return this.usersService.updateById(id, user);
    }

    @Authorized(["admin"])
    @Delete('/:id')
    async delete(@Param('id') id: number) {
        return this.usersService.deleteById(id);
    }
}