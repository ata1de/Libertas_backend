import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Libertas API',
      version: '1.0.0',
      description: 'API para o projeto Libertas'
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Servidor local'
      }
    ],
  },
};

const options = {
    swaggerOptions,
    apis: ['./src/routes.ts', './src/docs/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };

