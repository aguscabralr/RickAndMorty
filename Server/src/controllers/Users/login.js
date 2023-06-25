const { User } = require('../../db');

const login = async (req, res) => {
    try {
        await User.update({ active: false }, { where: { active: true } });
        const { email, password } = req.query;
        if (!email || !password) return res.status(400).send('Faltan datos')
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).send('Usuario no encontrado');
        else {
            if (password === user.password) {
                await User.update({ active: true }, { where: { email } });
                return res.status(200).json({ access: true })
            } else res.status(403).send('Contraseña Incorrecta');
            
        }
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const logout = async (req, res) => {
    const email = await User.findOne({ where: { active: true } });
    await User.update({ active: false }, { where: { email: email.email } });
    return res.status(200).json({ access: false })
};

module.exports = { login, logout };