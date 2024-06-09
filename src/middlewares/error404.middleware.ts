import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";
import {Service} from "typedi";
import {Request, Response} from 'express';

@Middleware({type: 'after'})
@Service()
export class Error404Middleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: (err?: any) => any): any {
        const status: number = 404;
        response.status(status).json({
            "error": "Not Found",
        });
    }
}