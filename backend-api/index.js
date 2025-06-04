
import express from 'express';
import guestRoutes from './src/modules/guests/guests.routes.js';
import bedroomsRoutes from './src/modules/bedrooms/bedrooms.routes.js';
import employeesRoutes from './src/modules/employees/employees.routes.js';
import plansRoutes from './src/modules/plans/plans.routes.js';
import reservationsRoutes from './src/modules/reservations/reservations.routes.js';
import tasksRoutes from './src/modules/tasks/tasks.routes.js';
import workgroupsRoutes from './src/modules/workgroups/workgroups.routes.js';
import authRoutes from './src/modules/auth/auth.routes.js'; // <-- Aqui o ajuste
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());
const PORT = 8000;


app.use(cookieParser());


app.use(cors({
    origin: 'http://localhost:3000', // <-- Frontend URL
    credentials: true, // <-- Permite envio de cookies
}));

// ✅ Usando o arquivo correto de rotas
app.use('/auth', authRoutes);
app.use('/guests', guestRoutes);
app.use('/bedrooms', bedroomsRoutes);
app.use('/employees', employeesRoutes);
app.use('/plans', plansRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/tasks', tasksRoutes);
app.use('/workgroups', workgroupsRoutes);
app.use('/uploads', express.static(path.resolve('uploads')));

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
