const jokeUrl = 'https://api.chucknorris.io/jokes/random';

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


export {
    getJoke,
}