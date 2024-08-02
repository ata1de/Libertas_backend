import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Libertas API',
    version: '1.0.0',
    description: 'API para o projeto Libertas',
  },
  servers: [
    {
      url: 'http://localhost:3333',
      description: 'Servidor local',
    },
  ],
};

const options = {
  definition: swaggerDefinition,
  apis: ['./src/routes.ts', './src/docs/*.ts'], // Certifique-se de que esses caminhos estão corretos
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };

