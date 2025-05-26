import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
      throw new Error('Login ou senha inválidos');
    }

    const passwordIsValid = await bcrypt.compare(password, employee.password);
    if (!passwordIsValid) {
      throw new Error('Login ou senha inválidos');
    }

    const token = jwt.sign(
      { userId: employee.id, login: employee.login }, // Ajustado para usar login
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      token, // Retorna o token para o controlador configurar o cookie
      message: 'Login realizado com sucesso',
      user: {
        id: employee.id,
        name: employee.name,
        login: employee.login,
        photo: employee.photo,
      },
    };
  },
};