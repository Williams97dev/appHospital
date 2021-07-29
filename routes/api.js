const express = require('express');
const router = express.Router();
const pacientes = require('./api/pacientes');
const medicos = require('./api/medicos');

router.use('/pacientes', pacientes);
router.use('/medicos', medicos);

module.exports = router;