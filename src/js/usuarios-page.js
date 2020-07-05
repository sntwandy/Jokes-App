import { getUsers } from './http-provider';

const body  = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
    tbody = document.querySelector('tbody');
}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {
    correlativo++;
    const html = `
        <td scope="col"> ${correlativo} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src=${usuario.avatar}>
        </td>
    `;

    const tr = document.createElement('tr');

    tr.innerHTML = html;
    tbody.append(tr);
};

const showUsers = async() => {
    const users = await getUsers()
    users.forEach((user)=> {
        crearFilaUsuario(user);
    });
}


export const init = () => {
    correlativo = 0;
    crearHtml();
    showUsers();
    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

