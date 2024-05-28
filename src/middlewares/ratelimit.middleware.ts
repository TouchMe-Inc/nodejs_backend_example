import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";
import {Service} from "typedi";
import {Request, Response} from 'express';
import rateLimit from 'express-rate-limit';
import {RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW} from "../config";

const limiter = rateLimit({
    windowMs: Number.parseInt(RATE_LIMIT_WINDOW || '5') * 60 * 1000,
    limit: Number.parseInt(RATE_LIMIT_MAX_REQUESTS || '100'),
});

@Middleware({type: 'before'})
@Service()
export class RateLimitMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: (err?: any) => any): any {
        limiter(request, response, next);
    }
}