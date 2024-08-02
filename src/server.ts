import cors from 'cors';
import express from 'express';
import { swaggerSpec, swaggerUi } from './config/swaggerOptions';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3333;

// Definindo as opções de CORS
const allowedOrigins = process.env.ALLOWED_URL ? [process.env.ALLOWED_URL] : ['http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin || '')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
