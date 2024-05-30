import {routingControllersToSpec} from 'routing-controllers-openapi';
import * as swaggerUiExpress from 'swagger-ui-express';
import {validationMetadatasToSchemas} from 'class-validator-jsonschema';
import {RoutingControllersOptions} from "routing-controllers/types/RoutingControllersOptions";
import {MetadataArgsStorage} from "routing-controllers/types/metadata-builder/MetadataArgsStorage";
import {Express} from "express";
import {description, name, version} from '@root/package.json';
import {SchemaObject} from "openapi3-ts/src/model/OpenApi";

export const useSwagger = (
    app: Express,
    getMetadataArgsStorage: MetadataArgsStorage,
    routingControllersOptions: RoutingControllersOptions,
) => {

    const schemas: SchemaObject = validationMetadatasToSchemas({
        refPointerPrefix: '#/components/schemas/'
    });

    const spec = routingControllersToSpec(
        getMetadataArgsStorage,
        routingControllersOptions, {
            components: {
                // @ts-ignore
                schemas
            },
            info: {
                description: `${description}`,
                title: `${name}`,
                version: `${version}`
            }
        });

    app.use('/docs',
        swaggerUiExpress.serve,
        swaggerUiExpress.setup(spec)
    );
};