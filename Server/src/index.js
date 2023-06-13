const server = require('./app');
require('dotenv').config();
const PORT = process.env.port || 3001;
const { database } = require('./db');

database.sync({ force: true })
.then(() => {
    server.listen(PORT, () => {
        console.log(`Listen server on port: ${PORT}`)
    });
})
.catch((error) => {
    console.log(error.message);
});