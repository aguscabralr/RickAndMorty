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

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    });
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (id) => {
    if (id >= 1 && id <= 826) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else window.alert(`${data.name} ya esta renderizado`);
      });
    } else window.alert('No existe un personaje con ese ID');
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
