import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";
import {Service} from "typedi";
import {Request, Response} from 'express';
import cors from 'cors';

@Middleware({type: 'before'})
@Service()
export class CorsMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: (err?: any) => any): any {
        cors()(request, response, next)
    }
}