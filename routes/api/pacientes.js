const express = require('express');
const { getAll, create } = require('../../models/paciente.model');
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

router.delete('/:idPaciente', (req, res) => {
	res.send('delete api pacientes');
});


module.exports = router;