import express, { json } from 'express';
import morgan from 'morgan';

//Importando rutas
import projectRoutes from './routes/projects';
import taskRoutes from './routes/task';

//Inicializando express
const app = express();

//Convirtiendo a JSON
app.use(morgan('dev'));
app.use(json());

//Usando rutas
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);



export default app;