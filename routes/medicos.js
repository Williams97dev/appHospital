const { getAll } = require('../models/medico.model');

const router = require('express').Router();

router.get('/', (req, res) => {
  getAll()
    .then((medicos) => res.render('medicos/index', { medicos }))
    .catch((error) => console.log(error));
});

module.exports = router;
