const express = require('express');
const router = express.Router();
const pacientes = require('./api/pacientes');

router.use('/pacientes', pacientes);



module.exports = router;