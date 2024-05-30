import {CorsMiddleware} from "@middlewares/cors.middleware";
import {HelmetMiddleware} from "@middlewares/helmet.middleware";
import {RateLimitMiddleware} from "@middlewares/ratelimit.middleware";
import {LoggerMiddleware} from "@middlewares/logger.middleware";

export const middlewares = [CorsMiddleware, HelmetMiddleware, RateLimitMiddleware, LoggerMiddleware];