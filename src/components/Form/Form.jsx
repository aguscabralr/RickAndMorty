import { useState } from "react";
import style from "./Form.module.css";
import portada from "../assets/portada.png";
import validate from "./validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({
        email: '',
        password: '',    
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
        login(userData);
    };

    return (
        <div className={style.contenedor}>
            <div
                className={style.portada}
                style={{ backgroundImage: `url(${portada})` }}
            ></div>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <h1>Rick & Morty Integration API</h1>
                    <hr />
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
                    <hr />
                    <button type="submit">LogIn</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
