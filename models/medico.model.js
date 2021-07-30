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

const getById = (medicoId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from medicos where id = ?',
            [medicoId],
            (err, result) => {
                if (err) return reject(err);
                if (result.length !== 1) return resolve(null);
                resolve(result[0]);
            }
        );
    });
};

const remove = (medicoId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'delete from medicos where id = ?',
            [medicoId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
}

module.exports = {
    getAll, create, getById, remove
};