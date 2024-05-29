import {DataSource} from "typeorm";
import {
    PROD, 
    TYPEORM_DATABASE,
    TYPEORM_LOGGING,
    TYPEORM_MIGRATIONS_RUN,
    TYPEORM_SYNCHRONIZE,
} from "./config";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import path from "node:path";

const dataBaseOptions: DataSourceOptions = {
    type: 'sqlite',
    database: path.resolve(__dirname, "..").concat(TYPEORM_DATABASE || '/sqlite/database.sqlite'),
    synchronize: TYPEORM_SYNCHRONIZE === 'true',
    logging: TYPEORM_LOGGING === 'true',
    entities: [
        PROD ? 'dist/entities/**/*.js' : 'src/entities/**/*.ts'
    ],
    migrations: [
        PROD
            ? 'dist/database/migrations/**/*.js'
            : 'src/database/migrations/**/*.ts'
    ],
    migrationsRun: TYPEORM_MIGRATIONS_RUN === 'true'
};

export const dataSource = new DataSource(dataBaseOptions);