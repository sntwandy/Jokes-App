const urlCRUD = 'https://reqres.in/api/users';

const getUsers = async (id) => {
    try {
        const response = await fetch(`${urlCRUD}/${id}`);
        const { data } = await response.json();
        return data;
    } catch(err) {
        throw err;
    }
};

const createUser = async (user) => {
    const response = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return await response.json();
};

const updateUser = async (id ,user) => {
    const response = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return await response.json();
};

const deleteUser = async (id) => {
    const response = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE',
    });
    return (response.ok) ? 'Deleted' : 'Cant delete';
};

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}