import {JsonController, Post} from "routing-controllers";
import {Service} from "typedi";
import {AuthService} from "../services/auth.service";

@JsonController('/auth')
@Service()
export class AuthController {
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