const body = document.body;
let inputFile, imngPhoto;

const createInputFileHtml = () => {
    const html = `
        <h1 class="mt-5">Upload files</h1>
        <hr>

        <label>Select a image:</label>
        <input type="file" accept="image/png, image/jpeg" />
        <br>
        <img id="photo" class="img-thumbnail" src="" />
    `;
    const div = document.createElement('div');
    div.innerHTML = html;

    body.append(div);

    inputFile = document.querySelector('input');
    imngPhoto = document.querySelector('#photo');
};

const events = () => {
    inputFile.addEventListener('change', event => {
        const file = event.target.files[0];
        console.log(file);
    });
}

export const init = () => {
    createInputFileHtml();
    events();
}