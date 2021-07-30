const { executeQuery } = require("../helpers")

const getAll = () => {
    return executeQuery(
        'SELECT * FROM medicos'
    );
};

const create = ({ nombre, apellidos, especialidad, telefono }) => {
    return executeQuery(
        'insert into medicos (nombre, apellidos, especialidad, telefono) values (?, ?, ?, ?)',
        [nombre, apellidos, especialidad, telefono]
    );
};

module.exports = {
    getAll, create
};