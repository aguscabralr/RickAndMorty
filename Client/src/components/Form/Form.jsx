import { useState } from "react";
import style from "./Form.module.css";
import portada from "../assets/portada.png";
import validate from "./validation";
import axios from "axios";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (event) => {
        setUserData({...userData,
            [event.target.name]: event.target.value,
        })
        setError(validate({...userData,
            [event.target.name]: event.target.value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error.email || error.password) window.alert('Invalid email or password');
        else login(userData);
    };

    const [sing, setSing] = useState(false);

    const singin = () => {
        sing 
            ? setSing(false)
            : setSing(true);
    };

    const handleRegister = async (userData) => {
        try {
            const URL = 'http://localhost:3001/rickandmorty/login/';
            const user = {
                email: userData.email,
                password: userData.password,
            };
            if (error.email || error.password) window.alert('Invalid email or password');
            else if (error.confirmPassword) window.alert('Passwords don´t match');
            else {
                await axios.post(URL, user);
                setSing(false);
            };
        } catch (error) {
            window.alert(error);
        };
    };

    return (
        <div className={style.contenedor}>
            <div className={style.portada} style={{ backgroundImage: `url(${portada})` }}></div>
            <div className={style.formContainer}>
                <form onSubmit={handleSubmit}>
                    {
                        sing 
                        ?   <div className={style.singUpContainer}>
                                <h1>Rick & Morty Registration</h1>
                                <div className={style.inputs}>
                                    <div>
                                        <p>Email</p>
                                        <input onChange={handleInputChange} type="text" name="email" value={userData.email} placeholder="Insert Email Address..." />
                                        {error.email && <h6 style={{color: 'red'}}>{error.email}</h6>}
                                    </div>
                                    <div>
                                        <p>Password</p>
                                        <input onChange={handleInputChange} type="password" name="password" value={userData.password} placeholder="Insert Password..." />
                                        {error.password && <h6 style={{color: 'red'}}>{error.password}</h6>}
                                    </div>
                                    <div>
                                        <p>Confirm Password</p>
                                        <input onChange={handleInputChange} type="password" name="confirmPassword" value={userData.confirmPassword} placeholder="Insert Password..." />
                                        {error.confirmPassword && <h6 style={{color: 'red'}}>{error.confirmPassword}</h6>}
                                    </div>
                                </div>
                                <div className={style.buttons}>
                                    <button type="button" onClick={() => handleRegister(userData)}>Register</button>
                                    <button type="button" onClick={singin}>Back</button>
                                </div> 
                            </div>
                        :   <div className={style.logInContainer}>
                                <h1>Rick & Morty Integration API</h1>
                                <div className={style.inputs}>
                                    <div>
                                        <p>Email</p>
                                        <input onChange={handleInputChange} type="text" name="email" value={userData.email} placeholder="Insert Email Address..." />
                                    </div>
                                    <div>
                                        <p>Password</p>
                                        <input onChange={handleInputChange} type="password" name="password" value={userData.password} placeholder="Insert Password..." />
                                    </div>
                                </div>
                                <div className={style.buttons}>
                                    <button type="submit">LogIn</button>
                                    <button type="button" onClick={singin}>SignUp</button>
                                </div>
                            </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default Form;
