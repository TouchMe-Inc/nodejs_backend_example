import {Service} from "typedi";
import jwt from 'jsonwebtoken';
import {JWT_SECRET, JWT_TOKEN_LIFE} from "../config";

@Service()
export class JwtService {

    async sign(payload: any) {
        return new Promise((resolve, reject) => {
            try {
                const token = jwt.sign(payload, JWT_SECRET as string, {
                    expiresIn: JWT_TOKEN_LIFE
                });
                resolve(token);
            } catch (error) {
                reject(error);
            }
        });
    }

    async decode(token: string) {
        return new Promise((resolve, reject) => {
            try {
                const decoded = jwt.decode(token);

                resolve(decoded);
            } catch (error) {
                reject(error);
            }
        });
    }

    async verify(token: string) {
        return new Promise((resolve, reject) => {
            try {
                const decoded = jwt.verify(token, JWT_SECRET as string);

                resolve(decoded);
            } catch (error) {
                reject(error);
            }
        });
    }
}