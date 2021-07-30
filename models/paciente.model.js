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


const remove = (pacientesId) => {
  return new Promise((resolve, reject) => {
    db.query(
      'delete from pacientes where id = ?',
      [pacientesId],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

const getById = (idPaciente) => {
  return executeQuery('select * from pacientes where id = ?', [idPaciente]);
};



module.exports = {
    getAll, create, remove, getById
};