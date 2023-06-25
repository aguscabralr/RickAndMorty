const { getCharById } = require('../controllers/Characters/getCharById');
const { getFavorites } = require('../controllers/Favorites/getFavorites');
const { deleteFav } = require('../controllers/Favorites/deleteFav');
const { postFav } = require('../controllers/Favorites/postFav');
const { login, logout } = require('../controllers/Users/login');
const { postUser } = require('../controllers/Users/postUser');
const { deleteUser } = require('../controllers/Users/deleteUser');

const router = require('express').Router();

router.get('/character/:id', getCharById);
router.get('/fav', getFavorites);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.get('/login', login);
router.get('/logout', logout);
router.post('/login', postUser);
router.delete('/login/:id', deleteUser);

module.exports = { router };