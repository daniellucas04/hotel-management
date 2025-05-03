import express from 'express';
import guestRoutes from './src/modules/guests/guests.routes.js';
import bedroomsRoutes from './src/modules/bedrooms/bedrooms.routes.js';
import employeesRoutes from './src/modules/employees/employees.routes.js';
import plansRoutes from './src/modules/plans/plans.routes.js';
import reservationsRoutes from './src/modules/reservations/reservations.routes.js'
import tasksRoutes from './src/modules/tasks/tasks.routes.js';
import workgroupsRoutes from './src/modules/workgroups/workgroups.routes.js';


const app = express();
app.use(express.json());
const PORT = 8000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})


app.use('/guests', guestRoutes);
app.use('/bedrooms', bedroomsRoutes);
app.use('/employees', employeesRoutes);
app.use('/plans', plansRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/tasks', tasksRoutes);
app.use('/workgroups', workgroupsRoutes);


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});