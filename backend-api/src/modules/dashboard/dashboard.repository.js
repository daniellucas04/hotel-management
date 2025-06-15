// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const DashboardRepository = {
    getGuestsRegistred: async () => {
        const results = await prisma.$queryRaw`
            SELECT COUNT(*) as total FROM guests WHERE DATE(created_at) = CURDATE();
        `;
        return {
            count: Number(results[0].total)
        };
    },

    getReservationsActive: async () => {
        const results = await prisma.$queryRaw`
            SELECT COUNT(*) as total FROM reservations WHERE status_checkin IN ('Pendente', 'Realizado');
        `;
        return {
            count: Number(results[0].total)
        };
    },
    
    getBedroomsOcuppied: async () => {
        const results = await prisma.$queryRaw`
            SELECT COUNT(*) as total FROM bedrooms WHERE status = 'Ocupado';
        `;
        return {
            count: Number(results[0].total) 
        };
    },
    
    getTotalCheckins: async () => {
        const results = await prisma.$queryRaw`
            SELECT COUNT(*) as total FROM reservations WHERE Date(check_in) = DATE(NOW());
        `;
        return {
            count: Number(results[0].total) 
        };
    },
    
    getTotalMoneyInTasks: async () => {
        const results = await prisma.$queryRaw`
            SELECT SUM(price) as total FROM tasks WHERE price > 0;
        `;

        return {
            sum: Number(results[0].total) 
        };
    },

    getTotalMoneyInReservations: async() => {
        const results = await prisma.$queryRaw`
            SELECT SUM(plans.price) as total FROM reservations INNER JOIN plans ON reservations.id_plan = plans.id WHERE reservations.check_out >= CURDATE() - INTERVAL 1 MONTH AND reservations.check_out <  CURDATE() + INTERVAL 1 DAY;
        `;

        return {
            sum: Number(results[0].total) 
        };
    }
};
