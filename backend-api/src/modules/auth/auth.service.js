import { prisma } from '../../lib/prisma.js';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const AuthService = {
  login: async (data) => {
    const parsed = LoginSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      throw new Error(Object.values(errors).flat().join(', '));
    }

    const { email, password } = data;

    const employee = await prisma.employees.findUnique({
      where: { email },
    });

    if (!employee) {
      throw new Error('Email ou senha inválidos');
    }

    const passwordIsValid = await bcrypt.compare(password, employee.password);
    if (!passwordIsValid) {
      throw new Error('Email ou senha inválidos');
    }

    return {
      message: 'Login realizado com sucesso',
      user: {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        photo: employee.photo,
      }
    };
  }
};
