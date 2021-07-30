const express = require('express');

const { getAll, create, update, getById, getByNumSegSocial, remove, getByHabitacion, updateHabitacion } = require('../../models/paciente.model');
const { getById: habGetById } = require('../../models/habitacion.model');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const pacientes = await getAll();
		res.json(pacientes);

	} catch (error) {
		res.json({ error: error.message });
	}
});

router.get('/numSegSocial/:num_seg_social', async (req, res) => {
	try {
		const result = await getByNumSegSocial(req.params.num_seg_social);
		if (result) {
			res.json(result);
		} else {
			res.json({ error: 'El paciente no existe en la base de datos' });
		}
	} catch (error) {
		res.json({ error: error.message });
	}

})

router.get('/:pacienteId/habitacion/:habitacionId', async (req, res) => {
	const pacienteId = req.params.pacienteId;
	const habitacionId = req.params.habitacionId;

	const habitacion = await habGetById(habitacionId);
	const resultNum = await getByHabitacion(habitacionId);

	if (habitacion.num_pacientes > resultNum.numPacientes) {
		const resultUpdate = await updateHabitacion(pacienteId, habitacionId);
		res.json(resultUpdate);
	} else {
		res.json({ error: 'No se pueden asignar más pacientes' });
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

/*
BLOQUE 1 - Rosa
--------
- Actualización de pacientes
- Recuperación de paciente por numSegSocial

*/

router.put('/:idPaciente', async (req, res) => {
	const idPaciente = req.params.idPaciente;
	try {
		const result = await update(idPaciente, req.body);
		const paciente = await getById(idPaciente);
		res.json(paciente);
	} catch (error) {
		res.json({ error: error.message });
	}
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