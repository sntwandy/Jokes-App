import '../css/components.css';

export const greeting = ( name ) => {
    console.log('Creating h1 etiquet');
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hi, ${name}`;

    document.body.append(h1);
};