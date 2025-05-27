import { DashboardRepository } from './dashboard.repository.js';

export const DashboardService = {
  getGuestsRegistred: () => DashboardRepository.getGuestsRegistred(),

  getReservationsActive: () => DashboardRepository.getReservationsActive(),
  
  getBedroomsOcuppied: () => DashboardRepository.getBedroomsOcuppied(),
  
  getTotalCheckins: () => DashboardRepository.getTotalCheckins(),

  getTotalMoneyInTasks: () => DashboardRepository.getTotalMoneyInTasks(),

  getTotalMoneyInReservations: () => DashboardRepository.getTotalMoneyInReservations(),
};
