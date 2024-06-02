import {Service} from "typedi";

@Service()
export class AuthService {

    signUp() {
        return [];
    }

    signIn() {
        return 'token';
    }

    logOut() {

    }
}