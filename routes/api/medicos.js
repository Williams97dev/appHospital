const express = require('express');
const router = express.Router();
const { getAll, create, getById, remove, update } = require('../../models/medico.model');

router.get('/', async (req, res) => {
	try{
		const medicos = await getAll();
		res.json(medicos);

	}catch(error){
		res.json({error: error.message});
	}
});

router.get('/:medicoId', async (req, res) => {
    try {
        const result = await getById(req.params.medicoId);
        if (result) {
            res.json(result);
        } else {
            res.json({ error: 'El medico no esta disponible' });
        }
    } catch (error) {
        res.json({ error: error.message });
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

router.delete('/:medicoId', async (req, res) => {
    const medicoId = req.params.medicoId;
    try {
        const medico = await getById(medicoId);
        if (!medico) {
            return res.json({ error: 'El medico solicitado no existe' });
        }
        const result = await remove(medicoId);
        res.json({ sucess: 'El medico se elimino correctamente' });
    } catch (error) {
        res.json({ error: error.message });
    }
});
router.put('/:medicoId', async (req, res) => {
    const resultado = await update(req.params.medicoId, req.body);
    return res.json(resultado);
})



module.exports = router;