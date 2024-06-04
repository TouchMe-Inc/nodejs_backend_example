import {Service} from "typedi";
import {compareSync, genSaltSync, hashSync} from "bcrypt";

@Service()
export class PasswordService {
    hash(password: string) {
        return hashSync(password, genSaltSync());
    }

    compare(password1: string, password2: string): boolean {
        return compareSync(password1, password2);
    }
}