const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get api medicos');
});

router.post('/', (req, res) => {
    res.send(' post api medicos');
});

router.put('/:idMedico', (req, res) => {
    res.send('put api medicos');
});

router.delete('/:idMedico', (req, res) => {
    res.send('delete api medicos');
});


module.exports = router;