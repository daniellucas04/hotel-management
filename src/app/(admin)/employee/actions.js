const requiredFields = {
    id_workgroup: "O cargo é obrigatório",
    name: "O nome é obrigatório",
    last_name: "O sobrenome é obrigatório",
    document: "O documento é obrigatório",
    birthday: "A data de nascimento é obrigatória",
    phone1: "O telefone 1 é obrigatório",
    login: "O nome de login é obrigatório",
    email: "O email é obrigatório",
    password: "A senha é obrigatória",
    password_confirm: "A confirmação de senha é obrigatória",
}

export async function getAll(page, limit) {
    try {
        const data = await fetch(`http://localhost:8000/employees?page=${page}&limit=${limit}`, {
            method: 'get',
        });

        return await data.json();
    } catch (error){
        console.log(error)
    }
}

export async function getEmployee(id) {
    try {
        const data = await fetch(`http://localhost:8000/employees/${id}`, {
            method: 'get',
        });

        return await data.json();
    } catch (error){
        console.log(error)
    }
}

export async function getAllWorkgroups() {
    try {
        const data = await fetch('http://localhost:8000/workgroups', {
            method: 'get',
        });

        return await data.json();
    } catch (error) {
        console.log(error);
    }
}

export async function updateEmployee(id, employee) {
    try {
        const data = await fetch(`http://localhost:8000/employees/${id}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(employee)
        });

        return await data.json();
    } catch (error){
        console.log(error)
    }
}

export async function createEmployee(employee) {
    try {
        const data = await fetch(`http://localhost:8000/employees/`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
              },
            body: employee
        });

        return await data.json();
    } catch (error){
        console.log(error)
    }
}

export function savePhoto(photo) {
    const tempPath = photo.path;
    const fileName = photo.originalFilename;

    const finalPath = path.join('./uploads', fileName);
    fs.rename(tempPath, finalPath, (err) => {
        if (err) {
            console.log(err);
        }

        console.log('Salvo');
    })
    console.log(photo);
}

export function validate(employee) {
    let error = [];

    Object.entries(requiredFields).forEach(([field, message]) => {
        if (!employee[field]) {
            error.push(message);
        }
    });

    if (employee.password_confirm != employee.password) {
        error.push('- Senha inválida');
    }

    if (employee.document.length != 11) {
        error.push('- Documento inválido');
    }
    
    if (employee.phone1.length != 11) {
        error.push('- Telefone 1 inválido');
    }

    if (!String(employee.email).match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')) {
        error.push('- Email inválido');
    }
    console.log(error);
    return error;
}
