// vai ter as regras de negocios 

import { EmployeeRepository } from './employees.repository.js';

export const EmployeeService = {
    getAll: () => EmployeeRepository.findAll(),
    getById: (id) => EmployeeRepository.findById(id),
    create: (data) => EmployeeRepository.create(data),
    update: (id, data) => EmployeeRepository.update(id, data),
    remove: (id) => EmployeeRepository.remove(id),
};
