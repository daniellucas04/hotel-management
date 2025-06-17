export async function getAll(page, limit) {
  try {
    const data = await fetch(
      `http://localhost:8000/employees?page=${page}&limit=${limit}`,
      {
        method: "get",
      }
    );

    return await data.json();
  } catch (error) {
    
  }
}

export async function searchEmployee(search, page, limit) {
  try {
    const data = await fetch(
      `http://localhost:8000/employees/search?data=${search}&page=${page}&limit=${limit}`,
      {
        method: "get",
      }
    );
    //console.log(await data.json())
    return await data.json();
  } catch (error) {

  }
}

export async function getEmployee(id) {
  try {
    const data = await fetch(`http://localhost:8000/employees/${id}`, {
      method: "get",
    });

    return await data.json();
  } catch (error) {
    
  }
}

export async function getAllWorkgroups() {
  try {
    const data = await fetch("http://localhost:8000/workgroups", {
      method: "get",
    });

    return await data.json();
  } catch (error) {
    
  }
}

export async function updateEmployee(id, employee) {
  try {
    delete employee.workgroup;
    delete employee.tasks;
    delete employee.logs;

    const data = await fetch(`http://localhost:8000/employees/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    return await data.json();
  } catch (error) {
    
  }
}

export async function createEmployee(employee) {
  try {
    const data = await fetch(`http://localhost:8000/employees/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    return await data.json();
  } catch (error) {
    
  }
}

export async function savePhoto(id, photo) {
  try {
    const image = new FormData();
    image.append("image", photo);

    const uploadedImage = await fetch(
      `http://localhost:8000/employees/${id}/uploads`,
      {
        method: "post",
        body: image,
      }
    );

    return await uploadedImage.json();
  } catch (error) {
    
  }
}

export async function deleteEmployee(id) {
  try {
    const result = await fetch(`http://localhost:8000/employees/${id}`, {
      method: 'delete'
    });

    return await result.json();
  } catch (error) {
    
  }
}