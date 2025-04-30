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
            body: JSON.stringify(employee)
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
    let error = '';
    if (employee.password_confirm != employee.password) {
        error += 'Senha inválida';
    }

    if (employee.document.length != 11) {
        error += 'O documento precisa ter 11 digitos';
    }
    
    if (employee.phone1.length != 14) {
        error += 'O telefone precisa ter 14 digitos';
    }

    if (!String(employee.email).match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')) {
        error += "O email está inválido";
    }

    return error;
}
