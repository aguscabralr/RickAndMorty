import SearchBar from "../SearchBar/SearchBar";
import henry from "../assets/henry.png";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { animate } from '../../Redux/actions';

const NavBar = ({onSearch}) => {
    const dispatch = useDispatch();
    const [animation, setAnimation] = useState(true);

    const handleAnimate = () => {
        if (animation) {
            setAnimation(false);
            dispatch(animate(false));
        } else {
            setAnimation(true);
            dispatch(animate(true));
        };
    };
    
    return(
        <div className={style.nav}>
            <Link to='/home'className={style.a}><button className={style.boton} onClick={handleAnimate}>Animation</button></Link>
            <Link to='/favorite' className={style.a}><button className={style.boton}>Favorites</button></Link>
            <SearchBar onSearch={onSearch}/>
            <Link to='/home' className={style.a}><button className={style.boton}>Home</button></Link>
            <Link to='/about' className={style.a}><button className={style.boton}>About</button></Link>
            <Link to='/' className={style.a}><button className={style.boton}>LogOut</button></Link>
            <a href="https://www.soyhenry.com/" target="_blank" className={style.a}><img src={henry} className={style.boton}/></a>
        </div>
    );
};


export default NavBar;