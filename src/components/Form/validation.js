const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

const validate = (userData) => {
    let error = {};
    if (!userData.email) error.email = 'Este campo no puede estar vacio';
    if (!regexEmail.test(userData.email)) error.email = 'El email es invalido';
    if (userData.email.length > 35) error.email = 'Esta campo no puede tener mas de 35 caracteres';
    if (!userData.password.match(/\d/)) error.password = 'Este campo debe contener al menos un número';
    if (userData.password.length < 6 && userData.password.length > 10) error.password = 'Este campo debe tener entre 6 y 10 caracteres';

    return error;
};

export default validate;