import {CorsMiddleware} from "./cors.middleware";
import {HelmetMiddleware} from "./helmet.middleware";
import {RateLimitMiddleware} from "./ratelimit.middleware";
import {LoggerMiddleware} from "./logger.middleware";

export const middlewares = [CorsMiddleware, HelmetMiddleware, RateLimitMiddleware, LoggerMiddleware];