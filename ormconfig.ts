import path from "node:path";
import {PROD, TYPEORM_DATABASE, TYPEORM_LOGGING, TYPEORM_MIGRATIONS_RUN, TYPEORM_SYNCHRONIZE} from "./src/config";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";

const dataSourceOptions: DataSourceOptions = {
    type: 'sqlite',
    database: path.resolve(__dirname, "..").concat(TYPEORM_DATABASE || '/sqlite/database.sqlite'),
    synchronize: TYPEORM_SYNCHRONIZE === 'true',
    logging: TYPEORM_LOGGING === 'true',
    entities: [
        PROD ? 'dist/src/entities/*.entity.js' : 'src/entities/*.entity.ts'
    ],
    migrations: [
        PROD
            ? 'dist/src/database/migrations/**/*.js'
            : 'src/database/migrations/**/*.ts'
    ],
    migrationsRun: TYPEORM_MIGRATIONS_RUN === 'true'
};

export = dataSourceOptions;