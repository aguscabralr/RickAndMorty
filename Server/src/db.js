require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;
const { usersMd, favoritesMd } = require('./models/index');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// const database = new Sequelize(
//    `postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//    { logging: false, native: false }
// );

const database = new Sequelize( DB_DEPLOY,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
usersMd(database);
//
favoritesMd(database);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = database.models;
User.belongsToMany(Favorite, { through: 'UserFavorite', timestamps: false });
Favorite.belongsToMany(User, { through: 'UserFavorite', timestamps: false });


module.exports = {
   ...database.models,
   database,
};
