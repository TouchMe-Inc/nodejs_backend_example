import {DataSource} from "typeorm";
import config from "@root/ormconfig";

export const dataSource = new DataSource(config);