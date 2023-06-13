const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`);
        const { name, status, species, gender, origin, image } = data;
        if (name) {
            const character = { id, name, status, species, gender, origin, image, };
            return res.status(200).json(character);
        };
        return res.status(404).send('Not found');
    } catch (error) {
        res.status(500).send(error.message)
    };
};

module.exports = {
    getCharById,
};