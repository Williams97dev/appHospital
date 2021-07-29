const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('get api pacientes');
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