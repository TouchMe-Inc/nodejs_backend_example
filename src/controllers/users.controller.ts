import {Get, JsonController, Param} from "routing-controllers";
import {Service} from "typedi";

@JsonController('/users')
@Service()
export class UserController {
    @Get()
    async index() {
        return {};
    }

    @Get('/:id')
    async show(@Param('id') id: number) {
        return {id};
    }
}