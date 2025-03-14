import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerDefinition from "@/swagger-definition";
import userRoutes from '@routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());

//Swagger
const specs = swaggerJsdoc({
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

//Routes
app.use('/users', userRoutes);

export default app;