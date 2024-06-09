import {Body, JsonController, Post} from "routing-controllers";
import {Service} from "typedi";
import {UsersService} from "../services/users.service";
import {User} from "../entities/user.entity";
import {JwtService} from "../services/jwt.service";
import {AuthDto} from "../dto/auth.dto";
import {PasswordService} from "../services/password";

@JsonController('api/v1/auth')
@Service()
export class AuthController {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService, private readonly passwordService: PasswordService) {
    }

    @Post('/sign-up')
    async signUp(@Body({validate: true}) authDto: AuthDto) {
        const user = await this.userService.getByLogin(authDto.login);

        if (user) {
            throw new Error("User already exists");
        }

        const newUser: User = new User();
        newUser.login = authDto.login;
        newUser.password = this.passwordService.hash(authDto.password);
        newUser.role = "user";

        const createdUser: User = await this.userService.create(newUser);

        return this.jwtService.sign({
            id: createdUser.id
        });
    }

    @Post('/sign-in')
    async signIn(@Body({validate: true}) authDto: AuthDto) {
        const user = await this.userService.getByLoginWithPassword(authDto.login);

        if (!user) {
            throw new Error("User not found!");
        }

        if (!this.passwordService.compare(authDto.password, user.password)) {
            throw new Error("Invalid password");
        }

        return this.jwtService.sign({
            id: user.id
        });
    }
}