import bcrypt from 'bcrypt';
import { z } from 'zod';
import { EmployeeRepository } from '../employees/employees.repository.js';


const LoginSchema = z.object({
  login: z.string(),
  password: z.string().min(6),
});

export const AuthService = {
  login: async (data) => {
    const parsed = LoginSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      throw new Error(Object.values(errors).flat().join(', '));
    }

    const { login, password } = data;

    const employee = await EmployeeRepository.findByLogin(login);

    if (!employee) {
      throw new Error('login ou senha inválidos');
    }

    const passwordIsValid = await bcrypt.compare(password, employee.password);
    if (!passwordIsValid) {
      throw new Error('login ou senha inválidos');
    }

    return {
      message: 'Login realizado com sucesso',
      user: {
        id: employee.id,
        name: employee.name,
        login: employee.login,
        photo: employee.photo,
      }
    };
  }
};
