# Proyecto de Rick & Morty
Tecnologías --> React, Redux, Express, Sequelize, PostgreSQL

## Descripción

La idea general del proyecto es crear una página que busque y renderice en foma de cartas cada uno de los personajes que uno busque
a partir de la barra de busqueda dentro de una API
<hr>

## / --> LogIn

Entrada de la página, con un formulario a llenar con sus respectivas validaciones de errores para iniciar seción y entrar a la página.
Ahora ya que esta conectado a una base de datos, se puede realizar el registro de un usuario con su respectivo email y contraseña solo si cumple las validaciones.
<hr>

## /home --> Pagina Principal

### Nav Bar 
Contiene 9 apartados, cada uno con su funcionalidad:
- Animation: botón que cambia entre realizar una animacion o no cuando insertamos un personaje
- Favorites: botón que redirige a una nueva ruta donde se muestran los personajes seleccionados como favoritos
- Random: botón que selecciona aleatoreamente un personaje y lo renderiza
- Barra: input de tipo numérico que recibe el ID de un personaje
- Agregar: botón que realiza la acción de agregar el personaje al que corresponda el ID ingresado
- Home: botón que redirige a la página principal donde se muestran las cartas agregadas
- About: botón que redirige a una nueva ruta donde se muestra mi información personal
- LogOut: botón que redirige a la página de LogIn
- Henry: botón que redirige a la información del bootcamp

### Card
Es el contenedor de la información que buscamos en la API esta renderiza la imagen, el nombre y hacemos hover sobre el mismo nos muestra el estado, la especia y el género

Ademas, cuenta con 3 puntos que al cliquearlos realizan una función:
- Corazon: agrega o elimina de favoritos al personaje
- Cruz: elimina al personaje, lo deja de renderizar
- Info: redirige a una nueva ruta donde se muestra el detalle del personaje
<hr>

## /favorite --> Favoritos
Renderiza todos los personajes que anteriormente fueron seleccionados como favoritos.

Ademas, cuenta con una nueva Nav Bar la cual contiene 2 seleccionadores:
- Order: cambia entre orden ascendente o descendente según el número de ID
- Filter: cambia y renderiza los diferentes géneros de los personajes