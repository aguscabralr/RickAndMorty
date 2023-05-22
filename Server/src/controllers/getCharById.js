const axios = require("axios");

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`) // No es necesario poner el .get
    .then(response => response.data)
    .then(data => {
        let character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
        };
        return res
                .writeHead(200, { 'Content-Type': 'application/json' })
                .end(JSON.stringify(character));
    })
    .catch(err => res
                    .writeHead(500, { 'Content-Type': 'text/plain' })
                    .end(err.message));
                    // .end(`El ID: ${id} no fue encontrado`));
};

module.exports = {
    getCharById,
};