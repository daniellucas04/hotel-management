import { EmployeeRepository } from './employees.repository.js';
import { formatValidationErrors } from '../../utils/validation.js';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

const MIN_DATE = new Date(1900, 0, 1);

//classe da validação
const employeeSchema = z.object({
  id_workgroup: z.number(),
  name: z.string().min(1, { message: "O Nome do funcionário é obrigatório" }),
  last_name: z.string().min(1, { message: "O Sobrenome do funcionário é obrigatório" }),
  document: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
  birthday: z.date().min(MIN_DATE, { message: `Data mínima permitida ${MIN_DATE.toLocaleDateString()}`}),
  phone1: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Número de telefone inválido"),
  phone2: z.string().optional(),
  address: z.string().min(1, { message: "O Endereço é obrigatório" }),
  photo: z.string().optional(),
  login: z.string().min(1, {message: "O usuário de login é obrigatório"}),
  email: z.string().email({message: "Formato de E-mail inválido"}),
  password: z.string().min(6, {message: "A senha para login deve ter pelo menos 6 dígitos"}),
});

function parseTypes(data) {
  return {
    ...data,
    id_workgroup: Number(data.id_workgroup),
    name: String(data.name),
    last_name: String(data.last_name),
    document: String(data.document),
    birthday: new Date(data.birthday),
    phone1: String(data.phone1),
    phone2: String(data.phone2),
    address: String(data.address),
    photo: String(data.photo),
    login: String(data.login),
    email: String(data.email),
    password: String(data.password),
  }
}

export const EmployeeService = {
  getAll: (page, limit) => EmployeeRepository.findAll(page, limit),
  
  getById: (id) => EmployeeRepository.findById(id),

  create: async (data) => {
    // Validação
    data = parseTypes(data);
    const parsed = employeeSchema.safeParse(data);
    
    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    const validData = parsed.data;
    // Hash da senha
    const hashedPassword = await bcrypt.hash(validData.password, 10);

    // Inserção no banco com senha hash e data convertida
    return EmployeeRepository.create({
      ...validData,
      birthday: new Date(validData.birthday), // ⬅️ conversão aqui
      password: hashedPassword,
    });
  },
  
  //fazer o update
  update: (id, data) => {
    data = parseTypes(data);
    const parsed = employeeSchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return EmployeeRepository.update(id, data)
  },

  upload: (id, data) => EmployeeRepository.upload(id, data),

  remove: (id) => EmployeeRepository.remove(id),

  search: (data, page, limit) => EmployeeRepository.search(data, page, limit),
};
