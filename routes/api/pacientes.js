const express = require('express');
const { getAll, create, getById, remove } = require('../../models/paciente.model');
const router = express.Router();

router.get('/', async (req, res) => {
	try{
		const pacientes = await getAll();
		res.json(pacientes);

	}catch(error){
		res.json({error: error.message});
	}
});

router.post('/', async (req, res) => {
	try {
		const result = await create(req.body);
		res.json(result);
	} catch (error) {
		res.json({ error: error.message });
	}
});

router.put('/:idPaciente', (req, res) => {
	res.send('put api pacientes');
});

router.delete('/:pacientestId', async (req, res) => {
  const pacientesId = req.params.pacientesId;
  try {
    const paciente = await getById(pacientesId);
    if (!paciente) {
      return res.json({ error: 'El paciente no existe en la BD' });
    }
    const result = await remove(pacientesId);
    res.json({ sucess: 'Se ha borrado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get('/:pacientesId', async (req, res) => {
  try {
    const result = await getById(req.params.pacientesId);
    if (result) {
      res.json(result);
    } else {
      res.json({ error: 'El paciente no existe en la base de datos' });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});


module.exports = router;