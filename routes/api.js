const express = require('express');
const router = express.Router();
const pacientes = require('./api/pacientes');
const medicos = require('./api/medicos');

// router.get('/', (req, res) => {
//     res.send('probado coneccion pto:3000'); 
// });

router.use('/pacientes', pacientes);
router.use('/medicos', medicos);

module.exports = router;