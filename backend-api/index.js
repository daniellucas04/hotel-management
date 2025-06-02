import express from 'express';
import cookieParser from 'cookie-parser'; // Add this
import guestRoutes from './src/modules/guests/guests.routes.js';
import bedroomsRoutes from './src/modules/bedrooms/bedrooms.routes.js';
import employeesRoutes from './src/modules/employees/employees.routes.js';
import plansRoutes from './src/modules/plans/plans.routes.js';
import reservationsRoutes from './src/modules/reservations/reservations.routes.js';
import tasksRoutes from './src/modules/tasks/tasks.routes.js';
import workgroupsRoutes from './src/modules/workgroups/workgroups.routes.js';
import authRoutes from './src/modules/auth/auth.routes.js';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cookieParser()); // Add cookie-parser middleware

const PORT = 8000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Exact frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Must be 'true' for cookies
    next();
});

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