import *as CRUD from './js/crud-provider';

/* CRUD.getUsers(1)
    .then(console.log)
    .catch(console.log); */

CRUD.createUser({
    name: 'Megan E.',
    job: 'Criminology'
}).then(console.log);