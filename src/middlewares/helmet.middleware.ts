import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";
import {Service} from "typedi";
import {Request, Response} from 'express';
import helmet from 'helmet';

@Middleware({type: 'before'})
@Service()
export class HelmetMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: (err?: any) => any): any {
        helmet()(request, response, next)
    }
}