const { deleteFav } = require('../controllers/Favorites/deleteFav');
const { getCharById } = require('../controllers/Characters/getCharById');
const { login } = require('../controllers/Users/login');
const { postFav } = require('../controllers/Favorites/postFav');
const { postUser } = require('../controllers/Users/postUser');

const router = require('express').Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = {
    router,
};