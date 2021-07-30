const { executeQuery } = require("../helpers")

const getAll = () => {
    return executeQuery(
        'SELECT * FROM pacientes'
    );
};


const create = ({ nombre, apellidos, num_seg_social, telefono, fecha_registro }) => {
    return executeQuery(
        'insert into pacientes (nombre, apellidos, num_seg_social, telefono, fecha_registro) values (?, ?, ?, ?, ?)',
        [nombre, apellidos, num_seg_social, telefono, fecha_registro])
};

module.exports = {
    getAll, create
};