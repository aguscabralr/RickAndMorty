const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-. ]).{8,}$/;

const validate = (userData) => {
    let error = {};
    //EMAIL
    if (userData.email.length > 35) error.email = 'Esta campo no puede tener mas de 35 caracteres';
    if (!regexEmail.test(userData.email)) error.email = 'El email es invalido';
    if (!userData.email.length) error.email = '';
    //PASSWORD
    if (!regexPassword.test(userData.password)) error.password = 'Passwords must have at least 8 characters and contain at least uppercase letters, lowercase letters, numbers, and symbols';
    if (!userData.password.length) error.password = '';
    //CONFIRM PASSWORD
    if (userData.password !== userData.confirmPassword) error.confirmPassword = 'Passwords must match'
    
    return error;
};

export default validate;