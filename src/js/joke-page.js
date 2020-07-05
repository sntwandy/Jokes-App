import { getJoke } from './http-provider';

const $body = document.body;
let $btntherJoke, $olList;
let $li;

const createJokesHtml = () => {
    const html = `
        <h1 class="mt-5">Jokes</h1>
        <hr>

        <button class="btn btn-primary">Other joke</button>

        <ol class="mt-2 list-group">
        </ol>
    `;

    const divJoke = document.createElement('div');
    divJoke.innerHTML = html;

    $body.append(divJoke);
};

const events = () => {
    $olList = document.querySelector('ol');
    $btntherJoke = document.querySelector('button');

    $btntherJoke.addEventListener('click', async () => {
        $btntherJoke.disabled = true;
        $li = document.querySelectorAll('li');
        drawnJoke(await getJoke(), $li.length + 1);
        $btntherJoke.disabled = false;
    });
};

const drawnJoke = (joke, n) => {
    const olItem= document.createElement('li');
    olItem.innerHTML = `${n}. <b>${joke.id}</b>: ${joke.value}`;
    olItem.classList.add('list-group-item');

    $olList.append(olItem);
};

export const init = () => {
    createJokesHtml();
    events();
};