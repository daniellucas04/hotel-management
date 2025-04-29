import { EmployeeRepository } from './employees.repository.js';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

// Schema Zod
const employeeSchema = z.object({
  id_workgroup: z.number(),
  name: z.string().min(1),
  last_name: z.string().min(1),
  document: z.string().length(11, "Documento deve ter 11 dígitos"),
  birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de nascimento inválida",
  }),
  phone1: z.string().min(10),
  phone2: z.string().optional(),
  address: z.string().min(1),
  photo: z.string().optional(),
  login: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export const EmployeeService = {
  getAll: () => EmployeeRepository.findAll(),

  getById: (id) => EmployeeRepository.findById(id),

  create: async (data) => {
    // Validação
    const parsed = employeeSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const message = Object.entries(errors).map(
        ([field, msgs]) => `${field}: ${msgs.join(', ')}`
      ).join('; ');
      throw new Error("Erro de validação - " + message);
    }

    const validData = parsed.data;

    // Hash da senha
    const hashedPassword = await bcrypt.hash(validData.password, 10);

    // Inserção no banco com senha hash e data convertida
    return EmployeeRepository.create({
      ...validData,
      password: hashedPassword,
      birthday: new Date(validData.birthday),
    });
  },

  update: (id, data) => EmployeeRepository.update(id, data),

  remove: (id) => EmployeeRepository.remove(id),
};
