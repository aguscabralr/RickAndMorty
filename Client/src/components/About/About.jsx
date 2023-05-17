import style from "./About.module.css";
import tinacho from "../assets/tinacho.png";
const About = () => {
  return (
    <div className={style.ventana}>
      <div className={style.contenedor}>
        <div className={style.info}>
          <article className={style.text}>
            <h1>Agustin Cabral</h1>
            <p>STATUS | FullStack Webdeveloper in Progress...</p>
            <p>GENDER | Male</p>
            <p>SPECIE | Human</p>
            <p>ORIGIN | Cordoba, Argentina</p>
          </article>
        </div>
        <div className={style.foto}>
          <img src={tinacho} alt="Yo" />
        </div>
      </div>
    </div>
  );
};

export default About;
