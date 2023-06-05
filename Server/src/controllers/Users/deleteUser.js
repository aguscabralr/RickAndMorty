const { User } = require('../../db');

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminado = User.findOne({ where: { id } });
        await User.destroy({ where: { id } });
        return res.status(200).json(eliminado);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = { deleteUser };