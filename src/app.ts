import express from 'express';
import carRoutes from './Routes/car.routes';
import motorcycleRoutes from './Routes/motocycle.routes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);

export default app;
