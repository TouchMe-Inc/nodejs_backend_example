import dotnet from 'dotenv';

dotnet.config();

export const ENV_PROD: boolean = process.env.ENV === 'prod';
export const TYPEORM_SYNCHRONIZE: boolean = process.env.TYPEORM_SYNCHRONIZE === 'true';
export const TYPEORM_LOGGING: boolean = process.env.TYPEORM_LOGGING === 'true';

export const {
    PORT,
    RATE_LIMIT_WINDOW,
    RATE_LIMIT_MAX_REQUESTS,
    TYPEORM_DATABASE,
    TYPEORM_MIGRATIONS_RUN,
    JWT_SECRET,
    JWT_TOKEN_LIFE
} = process.env;