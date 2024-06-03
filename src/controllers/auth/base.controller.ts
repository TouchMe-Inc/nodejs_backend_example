import {JsonController, Post} from "routing-controllers";
import {Service} from "typedi";
import {AuthService} from "../../services/auth.service";

@JsonController('/auth/base')
@Service()
export class BaseController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/sign-up')
    signUp() {
        return this.authService.signUp();
    }

    @Post('/sign-in')
    signIn() {
        return this.authService.signIn();
    }

    @Post('/logout')
    logOut() {
        return this.authService.logOut();
    }
}