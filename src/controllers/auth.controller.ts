import {JsonController, Post} from "routing-controllers";
import {Service} from "typedi";

@JsonController('/auth')
@Service()
export class AuthController {
    @Post('/sign-up')
    async signUp() {
        return [];
    }

    @Post('/sign-in')
    async signIn() {
        return 'token';
    }

    @Post('/logout')
    async logOut() {

    }
}