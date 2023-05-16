# Proyecto de Rick & Morty

Proyecto de prueba creado con React y React-Redux

## Descripción

La idea general del proyecto es crear una página que busque y renderice en foma de cartas cada uno de los personajes que uno busque
a partir de la barra de busqueda dentro de una API

### / --> LogIn

Entrada de la página, con un formulario a llenar con sus respectivas validaciones de errores para iniciar seción y entrar a la página.
Actualmente solo cuenta con una sola forma de entrar y es <br/> 
mail: a@a.a <br/>
contraseña: a

### NavBar

Contiene 8 botones, cada uno con su funcionalidad:
- Animation: botón que cambia entre realizar una animacion o no cuando insertamos un personaje
- Favorites: botón que redirige a una nueva ruta donde se muestran los personajes seleccionados como favoritos
- Random: botón que selecciona aleatoreamente un personaje y lo renderiza
- Barra: input de tipo numérico que recibe el ID de un personaje
- Agregar: botón que realiza la acción de agregar el personaje al que corresponda el ID ingresado
- Home: botón que redirige a la página principal donde se muestran las cartas agregadas
- About: botón que redirige a una nueva ruta donde se muestra mi información personal
- LogOut: