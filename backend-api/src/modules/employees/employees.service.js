import { EmployeeRepository } from './employees.repository.js';
import bcrypt from 'bcryptjs';

export const EmployeeService = {
    getAll: () => EmployeeRepository.findAll(),
    getById: (id) => EmployeeRepository.findById(id),

    create: async (data) => {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const preparedData = {
            ...data,
            birthday: new Date(data.birthday), // ISO-8601 (YYYY-MM-DD) → Date
            password: hashedPassword,
        };

        return EmployeeRepository.create(preparedData);
    },

    update: (id, data) => EmployeeRepository.update(id, data),
    remove: (id) => EmployeeRepository.remove(id),
};
