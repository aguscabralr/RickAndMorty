const { User } = require('../../db');

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (!email || !password) return res.status(400).send('Faltan datos')
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).send('Usuario no encontrado');
        else {
            password === user.password 
                ? res.status(200).json({ access: true })
                : res.status(403).send('Contraseña Incorrecta');
        }
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = { login };