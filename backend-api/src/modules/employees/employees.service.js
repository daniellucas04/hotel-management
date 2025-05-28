import { EmployeeRepository } from './employees.repository.js';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

//classe da validação
const employeeSchema = z.object({
  id_workgroup: z.number(),
  name: z.string().min(1),
  last_name: z.string().min(1),
  document: z.string(),
    // .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    //   message: "Documento deve estar no formato xxx.xxx.xxx-xx",
    // }),
  // birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
  //   message: "Data de nascimento inválida",
  // }),
  phone1: z.string().min(11),
  phone2: z.string().optional(),
  address: z.string().min(1),
  photo: z.string().optional(),
  login: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

class ValidationError extends Error {
  constructor(message, details) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.details = details; // Objeto com os erros por campo
  }
}

export const EmployeeService = {
  getAll: (page, limit) => EmployeeRepository.findAll(page, limit),
  // getAll:() => EmployeeRepository.findAll(),
  
  getById: (id) => EmployeeRepository.findById(id),

  create: async (data) => {
    // Validação
    data = {...data, id_workgroup: Number(data.id_workgroup)}

    const parsed = employeeSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      
      throw new ValidationError('Erro de validação', errors);
    }
    

    const validData = parsed.data;

    // Hash da senha
    const hashedPassword = await bcrypt.hash(validData.password, 10);

    // Inserção no banco com senha hash e data convertida
    return EmployeeRepository.create({
      ...validData,
      password: hashedPassword,
    });
  },
  
  //fazer o update
  update: (id, data) =>{
     data = {...data, id_workgroup: Number(data.id_workgroup)}
    const parsed = employeeSchema.safeParse(data);
    if(!parsed.success){
      const errors = parsed.error.flatten().fieldErrors;
      throw new ValidationError('Erro de validação', errors)
    }

    return EmployeeRepository.update(id, data)
  },

  upload: (id, data) => EmployeeRepository.upload(id, data),

  remove: (id) => EmployeeRepository.remove(id),
};
