const { Favorite, User, UserFavorite } = require('../../db');

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        if (!id || !name || !status || !species || !gender || !origin || !image) return res.status(401).send('Faltan Datos');

        const user = await User.findOne({ where: { active: true } });

        const favCreate = await Favorite.findOrCreate({ where: { id, name, origin, status, image, species, gender } });
        await UserFavorite.create({ UserId: user.id, FavoriteId: favCreate[0].id });

        const allUserFav = await UserFavorite.findAll({ where: { UserId: user.id } });
        return res.status(200).json(allUserFav);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = { postFav };