import { DashboardRepository } from './dashboard.repository.js';

export const DashboardService = {
  getGuestsRegistred: () => DashboardRepository.getGuestsRegistred(),

  getReservationsActive: () => DashboardRepository.getReservationsActive(),
  
  getBedroomsOcuppied: () => DashboardRepository.getBedroomsOcuppied(),
  
  getTotalCheckouts: () => DashboardRepository.getTotalCheckouts(),

  getTotalMoneyInTasks: () => DashboardRepository.getTotalMoneyInTasks(),
};
