import dotnet from 'dotenv';

dotnet.config();

export const {
    PORT,
    RATE_LIMIT_WINDOW,
    RATE_LIMIT_MAX_REQUESTS
} = process.env;