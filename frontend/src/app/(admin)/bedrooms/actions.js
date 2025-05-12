const requiredFields = {
    bed_quantify: "A quantidade de quarto é obrigatório",
    bathroom_quantity: "A quantidade de banheiros são obrigatórios",
    tv_quantify: "A quantidade de TV's são obrigatórias",
    category: "A categoria do quarto é obrigatório",
    classification: "A classificação do quarto é obrigatório",
    privileges: "Os privilégios do quarto são obrigatórios",
    short_description: "A descrição do quarto é obrigatório",
    status: "O status do quarto é obrigatório",
    photo: "A foto do quarto é obrigatório",
};

export function validate(bedroom) {
    let errors = [];

    Object.entries(requiredFields).forEach(([field, message]) => {
        if (!bedroom[field]) {
            errors.push(message);
        }
    });

    if (bedroom.bed_quantify < 1) {
        errors.push("A quantidade de camas deve ser maior que zero");
    }
    if (bedroom.bathroom_quantity < 1) {
        errors.push("A quantidade de banheiros deve ser maior que zero");
    }

    return errors;
}

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
        console.log(error);
    }
}

export async function getBedrooms(id) {
    try {
        const data = await fetch(`http://localhost:8000/bedrooms/${id}`, {
            method: "get",
        });

        return await data.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getAllWorkgroups() {
    try {
        const data = await fetch("http://localhost:8000/workgroups", {
            method: "get",
        });

        return await data.json();
    } catch (error) {
        console.log(error);
    }
}

export async function updateBedroom(id, bedroom) {
    try {
        const data = await fetch(`http://localhost:8000/bedrooms/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bedroom),
        });

        return await data.json();
    } catch (error) {
        console.log(error);
    }
}

export async function createBedroom(bedroom) {
    try {
        const data = await fetch(`http://localhost:8000/bedrooms/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bedroom),
        });

        return await data.json();
    } catch (error) {
        console.log(error);
    }
}

export async function savePhoto(id, photo) {
    try {
        const image = new FormData();
        image.append("image", photo);

        const uploadedImage = await fetch(
            `http://localhost:8000/bedrooms/${id}/uploads`,
            {
                method: "post",
                body: image,
            }
        );

        return await uploadedImage.json();
    } catch (error) {
        console.log(error);
    }
}

