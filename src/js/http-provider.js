const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'u0ubyexa';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dh9cghj6y/upload';

const getJoke = async () => {

    try {
        const response = await fetch(jokeUrl);
        if (!response.ok) throw 'Cant do the petition';
        const {icon_url, id, value} = await response.json();
        return {icon_url, id, value};
    } catch(err) {
        throw err;
    }
};

const getUsers = async () => {
    try {
        const response = await fetch(urlUsers);
        const { data:users } = await response.json();
        return users;
    } catch(err) {
        throw err;
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file);

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
    } catch(err) {
        throw err;
    }
}


export {
    getJoke,
    getUsers,
    uploadImage,
}