const { Favorite } = require('../../db');

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        if(!id || !name || !status || !species || !gender || !origin || !image ) return res.status(401).send('Faltan Datos');
        await Favorite.findOrCreate({ where: { id, name, status, species, gender, origin, image } });
        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = { postFav };