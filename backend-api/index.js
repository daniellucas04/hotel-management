import express from 'express';
import dotenv from 'dotenv';
import guestRoutes from './src/modules/guests/guests.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/guests', guestRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});