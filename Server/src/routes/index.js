const { getCharById } = require('../controllers/Characters/getCharById');
const { deleteFav } = require('../controllers/Favorites/deleteFav');
const { postFav } = require('../controllers/Favorites/postFav');
const { login } = require('../controllers/Users/login');
const { postUser } = require('../controllers/Users/postUser');
const { deleteUser } = require('../controllers/Users/deleteUser');

const router = require('express').Router();

router.get('/character/:id', getCharById);
router.delete('/fav/:id', deleteFav);
router.post('/fav', postFav);
router.get('/login', login);
router.post('/login', postUser);
router.delete('/login/:id', deleteUser);

module.exports = { router };