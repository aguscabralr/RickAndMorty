const { User, Favorite, UserFavorite } = require('../../db');

const getFavorites = async (req, res) => {
  try {
    const user = await User.findOne({ where: { active: true } });
    const allUserFav = await UserFavorite.findAll({ where: { UserId: user.id } });
    const favoritesPromises = await allUserFav.map(async (fav) => {
      const favorite = await Favorite.findOne({ where: { id: fav.FavoriteId } });
      return { id: favorite.id, name: favorite.name, origin: favorite.origin, status: favorite.status, image: favorite.image, species: favorite.species, gender: favorite.gender }
    });
    const favorites = await Promise.all(favoritesPromises)
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json(error.message);
  };
};

module.exports = { getFavorites };