import dotnet from 'dotenv';

dotnet.config();

export const {
    PORT,
    PROD,
    RATE_LIMIT_WINDOW,
    RATE_LIMIT_MAX_REQUESTS,
    TYPEORM_DATABASE,
    TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING,
    TYPEORM_MIGRATIONS_RUN,
} = process.env;