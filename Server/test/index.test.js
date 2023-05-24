const app = require("../src/app");
const session = require("supertest");
const request = session(app);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await request.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (await request.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        });
        it('Si hay un error responde con status: 500', async () => {
            await request.get('/rickandmorty/character/0').expect(500);
        });
    });
    describe('GET /rickandmorty/login', () => {
        it('La informacion de loign es correcta', async () => {
            const response = (await request.get('/rickandmorty/login?email=a@a.a&password=a')).body;
            expect(response.access).toEqual(true);
        });
        it('La informacion de loign es incorrecta', async () => {
            const response = (await request.get('/rickandmorty/login?email=as@as.as&password=as')).body;
            expect(response.access).toEqual(false);
        });
    });
    describe('POST /rickandmorty/fav', () => {
        const character1 = { id: '1', name: 'Agustin' };
        const character2 = { id: '2', name: 'Tinacho' };
        it('Devuelve el elemento enviado por body', async () => {
            const response = (await request.post('/rickandmorty/fav').send(character1)).body;
            expect(response).toContainEqual(character1)
        });
        it('Devuelve el elemento previo enviado y el actual', async () => {
            const response = (await request.post('/rickandmorty/fav').send(character2)).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        });
    });
    describe('DELETE /rickandmorty/fav/:id', () => {
        const character1 = { id: '1', name: 'Agustin' };
        const character2 = { id: '2', name: 'Tinacho' };
        it('Devuelve el arreglo correspondiente si no se elimina ningun personaje', async () => {
            const response = (await request.delete('/rickandmorty/fav/0')).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        });
        it('Elimina correctamente al personaje que se especifica por ID', async () => {
            const response = (await request.delete('/rickandmorty/fav/1')).body;
            expect(response).toContainEqual(character2);
        });
    });
});