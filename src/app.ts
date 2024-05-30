import 'reflect-metadata';
import express from 'express';
import {getMetadataArgsStorage, useContainer, useExpressServer} from 'routing-controllers';
import {Container} from 'typedi';
import {controllers} from './controllers';
import {middlewares} from "./middlewares";
import {useSwagger} from "./swagger";

const app: express.Express = express();

const  routingControllersOptions = {
    routePrefix: '/api',
    defaultErrorHandler: false,
    interceptors: [],
    controllers,
    middlewares
}

useContainer(Container);

useExpressServer(app, routingControllersOptions);

useSwagger(app, getMetadataArgsStorage(), routingControllersOptions);

export default app;