import {SwaggerDefinition} from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Api',
        version: '1.0.0',
        description: 'The API',
    },
    servers: [{
        url: 'http://localhost:3000',
        description: 'Локальный сервер'
    }],
};

export default swaggerDefinition;