const { json } = require('express');
const express = require('express');
const { getAll } = require('../../models/paciente.model');
const router = express.Router();

router.get('/', async (req, res) => {
	try{
		const pacientes = await getAll();
		res.json(pacientes);

	}catch(error){
		res.json({error: error.message});
	}
});

router.post('/', (req, res) => {
	res.send(' post api pacientes');
});

router.put('/:idPaciente', (req, res) => {
	res.send('put api pacientes');
});

router.delete('/:idPaciente', (req, res) => {
	res.send('delete api pacientes');
});


module.exports = router;