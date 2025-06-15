export async function getAll(page, limit) {
    try {
        const data = await fetch(
            `http://localhost:8000/bedrooms?page=${page}&limit=${limit}`,
            {
                method: "get",
            }
        );

        return await data.json();
    } catch (error) {
        
    }
}

export async function searchBedroom(search ,page, limit) {
    try {
        const data = await fetch(
            `http://localhost:8000/bedrooms/search?data=${search}&page=${page}&limit=${limit}`,
            {
                method: "get",
            }
        );

        return await data.json();
    } catch (error) {

    }
}

export async function getBedroom(id) {
    try {
        const data = await fetch(`http://localhost:8000/bedrooms/${id}`, {
            method: "get",
        });

        return await data.json();
    } catch (error) {
        
    }
}


export async function updateBedroom(id, bedroom) {
    try {
        const data = await fetch(`http://localhost:8000/bedrooms/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...bedroom,
                category: String(bedroom.category).replace(' ', '_')
            }),
        });
        
        return await data.json();
    } catch (error) {
        
    }
}

export async function createBedroom(bedroom) {
    try {
        const data = await fetch(`http://localhost:8000/bedrooms/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...bedroom,
                category: String(bedroom.category).replace(' ', '_')
            }),
        });

        return await data.json();
    } catch (error) {
        
    }
}

export async function savePhoto(id, photo) {
    try {
        const image = new FormData();
        image.append("image", photo);

        const uploadedImage = await fetch(`http://localhost:8000/bedrooms/${id}/uploads`,
            {
                method: "post",
                body: image,
            }
        );

        return await uploadedImage.json();
    } catch (error) {
        
    }
}

export async function deleteBedroom(id) {
    try {
      const result = await fetch(`http://localhost:8000/bedrooms/${id}`, {
        method: 'delete'
      });
  
      return await result.json();
    } catch (error) {

    }
}