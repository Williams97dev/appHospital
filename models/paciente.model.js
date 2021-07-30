const { executeQuery, executeQueryUnique } = require("../helpers")

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


const update = (id, { nombre, apellidos, num_seg_social, telefono, fecha_registro }) => {
  return new Promise((resolve, reject) => {
    db.query(
      'update pacientes set nombre = ?, apellidos = ?, num_seg_social = ?, telefono = ?, fecha_registro = ? where id = ?',
      [nombre, apellidos, num_seg_social, telefono, fecha_registro, id],
        (err, result) => {
          if (err) return reject(err)
          resolve(result)
      }
    )
  })
}

const getById = (pacienteId) => {
    return executeQueryUnique(
        'select * from pacientes where id = ?',
        [pacienteId]
    );
};


const getByNumSegSocial = (num_seg_social) => {
    return executeQueryUnique(
        'select * from pacientes where num_seg_social = ?',
        [num_seg_social]
    );
};

module.exports = {
    getAll, create, update, getById, getByNumSegSocial
};