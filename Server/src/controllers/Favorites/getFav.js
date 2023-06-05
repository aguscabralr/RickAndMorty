const getFav = (req, res) => {
    return res.status(200).send(myFavorites);
  };

module.exports = { getFav };