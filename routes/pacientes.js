const express = require('express');
const router = express.Router();
const { getAll } = require('../models/paciente.model');

router.get('/', async (req, res) => {
	try {
		const pacientes = await getAll();
		res.render('pacientes', {
			pacientes: pacientes,
			title: 'Listado de pacientes'
		});

	} catch (error) {
		console.log({ error: error.message });
	}
});

module.exports = router;