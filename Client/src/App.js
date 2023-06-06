import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    access ? navigate('/home') : navigate('/');
  }, [access]);


  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      setAccess(data.access)
    } catch (error) {
      window.alert('Invalid email or password');
    }
  };

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name && !characters.find(char => char.id === data.id))
        setCharacters(oldChars => [...oldChars, data])
      else
        window.alert(`${data.name} ya esta renderizado`);
    } catch (error) {
      window.alert('No existe un personaje con ese ID');
    };
  };

  const logout = async () => {
    setAccess(false);
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const clear = () => {
    setCharacters([]);
  };

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} clear={clear} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
