import dotnet from 'dotenv';

dotnet.config();

export const ENV_PROD = process.env.ENV === 'prod';

export const {
    PORT,
    RATE_LIMIT_WINDOW,
    RATE_LIMIT_MAX_REQUESTS,
    TYPEORM_DATABASE,
    TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING,
    TYPEORM_MIGRATIONS_RUN,
    JWT_SECRET,
    JWT_TOKEN_LIFE
} = process.env;