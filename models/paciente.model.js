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




const getByNumSegSocial = (num_seg_social) => {
  return executeQueryUnique(
    'select * from pacientes where num_seg_social = ?',
    [num_seg_social]
  );
};

const getByHabitacion = (habitacionId) => {
  return executeQueryUnique('select count(*) as numPacientes from pacientes where habitacion = ?', [habitacionId]);
}

const updateHabitacion = (pacienteId, habitacionId) => {
  return executeQuery('update pacientes set habitacion = ? where id = ?', [pacienteId, habitacionId]);
}

module.exports = {
  getAll, create, update, getById, getByNumSegSocial, remove, getByHabitacion, updateHabitacion
};