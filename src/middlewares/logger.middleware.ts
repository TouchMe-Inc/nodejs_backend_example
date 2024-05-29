import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";
import {Service} from "typedi";
import {Request, Response} from 'express';

@Middleware({type: 'before'})
@Service()
export class LoggerMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: (err?: any) => any): any {
        console.log('[',new Date(Date.now()).toString(), ']', request.method, request.hostname, request.path);
        next();
    }
}