import {Service} from "typedi";
import jwt from 'jsonwebtoken';
import {JWT_SECRET, JWT_TOKEN_LIFE} from "../config";

@Service()
export class JwtService {

    sign(payload: any) {
        return jwt.sign(payload, JWT_SECRET || "", {
            expiresIn: JWT_TOKEN_LIFE
        });
    }

    decode(token: string) {
        return jwt.decode(token);
    }

    verify(token: string) {
        return jwt.verify(token, JWT_SECRET || "");
    }
}