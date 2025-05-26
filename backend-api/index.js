import express from 'express';
import cookieParser from 'cookie-parser'; // Adicionado
import guestRoutes from './src/modules/guests/guests.routes.js';
import bedroomsRoutes from './src/modules/bedrooms/bedrooms.routes.js';
import employeesRoutes from './src/modules/employees/employees.routes.js';
import plansRoutes from './src/modules/plans/plans.routes.js';
import reservationsRoutes from './src/modules/reservations/reservations.routes.js';
import tasksRoutes from './src/modules/tasks/tasks.routes.js';
import workgroupsRoutes from './src/modules/workgroups/workgroups.routes.js';
import AuthRoutes from './src/modules/auth/auth.controller.js';
import authMiddleware from './src/middlewares/auth.middlewares.js'; // Adicionado
import path from 'path';

const app = express();
app.use(express.json());
app.use(cookieParser()); // Adicionado para processar cookies

// Configuração de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Especifique o domínio do frontend
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// Rotas
app.use('/auth', AuthRoutes);
app.use('/guests', authMiddleware, guestRoutes); // Proteger rotas com authMiddleware
app.use('/bedrooms', authMiddleware, bedroomsRoutes);
app.use('/employees', authMiddleware, employeesRoutes);
app.use('/plans', authMiddleware, plansRoutes);
app.use('/reservations', authMiddleware, reservationsRoutes);
app.use('/tasks', authMiddleware, tasksRoutes);
app.use('/workgroups', authMiddleware, workgroupsRoutes);
app.use('/uploads', express.static(path.resolve('uploads')));

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});