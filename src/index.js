const jokeUrl = 'https://api.chucknorris.io/jokes/random';

/* fetch(jokeUrl)
    .then((response) => {
        response.json().then(data => {
            console.log(data);
        })
}); */

fetch(jokeUrl)
    .then(response => response.json())
    .then( ( { id, value } ) => console.log(id, value) );