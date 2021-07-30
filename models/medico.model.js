const { executeQuery } = require("../helpers")

const getAll = () => {
    return executeQuery(
        'SELECT * FROM medicos'
    );
};

const create = ({ name, email, address, phone }) => {
    return executeQuery(
        'insert into clients (name, apellido, especialidad, telefono) values (?, ?, ?, ?)',
        [nombre, apellido, especialidad, telefono]
    );
};

// const getBypacienteId = (userId) => {
//     return executeQuery (
//         'select * from clients where user_id = ?',
//         [userId]
//     );
// }

// const getBymedicoId = (userId) => {
//     return executeQuery (
//         'select * from clients where user_id = ?',
//         [userId]
//     );
// }

module.exports = {
    getAll, create
};