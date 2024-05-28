import {Get, JsonController} from "routing-controllers";
import {Service} from "typedi";

@JsonController('/news')
@Service()
export class NewsController {
    @Get()
    async index() {
        return ["news10", "news11"];
    }
}