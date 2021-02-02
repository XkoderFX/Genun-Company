import express from 'express';
import { json } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(json());

app.use('/api/orders', orderRoutes);

export default app;
