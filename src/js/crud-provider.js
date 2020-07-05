const urlCRUD = 'https://reqres.in/api/users';

const getUsers = async (id) => {
    const response = await fetch(`${urlCRUD}/${id}`);
    const { data } = await response.json();

    return data;
};

export {
    getUsers,
}