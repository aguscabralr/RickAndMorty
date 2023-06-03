import SearchBar from "../SearchBar/SearchBar";
import henry from "../assets/henry.png";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { animate } from '../../Redux/actions';

const NavBar = ({onSearch, logout}) => {
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
            <div className={style.conteHenry}>
                <a href="https://www.soyhenry.com/" target="_blank" className={style.a}><img src={henry} className={style.henry}/></a>
            </div>
            <div className={style.conteSearch}>
                <SearchBar onSearch={onSearch}/>
            </div>
            <div className={style.conteButton}>
                <Link to='/about'><button className={style.boton}>About</button></Link>
                <Link to='/home'><button className={style.boton}>Home</button></Link>
                <Link to='/favorite'><button className={style.boton}>Favs</button></Link>
                <Link to='/home'><button className={style.boton} onClick={handleAnimate}>Animate</button></Link>
            </div>
            <div className={style.conteLog}>
                <Link to='/' className={style.a}><button className={style.logout} onClick={() => logout()}>LogOut</button></Link>
            </div>
        </div>
    );
};


export default NavBar;