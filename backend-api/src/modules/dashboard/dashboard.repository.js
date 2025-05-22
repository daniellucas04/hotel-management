// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const DashboardRepository = {
    getGuestsRegistred: async () => {
        const results = await prisma.$queryRaw`
            SELECT COUNT(*) as total FROM guests WHERE DATE(created_at) = CURDATE()
        `;
        return {
            count: Number(results[0].total)
        };
    },

    getReservationsActive: async () => {
        return await prisma;
    },
    
    getBedroomsOcuppied: async () => {
        return await prisma;
    },
    
    getTotalCheckouts: async () => {
        return await prisma;
    },
    
    getTotalMoneyInTasks: async () => {
        return await prisma;
    },
};
