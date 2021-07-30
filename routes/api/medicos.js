const express = require('express');
const router = express.Router();
const { getAll, create, getById } = require('../../models/medico.model');

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

router.delete('/:medicotId', async (req, res) => {
    const medicoId = req.params.medicotId;
    try {
        const medico = await getById(productId);
        if (!product) {
            return res.json({ error: 'El medico no esta disponible' });
        }
        const result = await remove(medicoId);
        res.json({ sucess: 'El medico se eliminocorrectamente' });
    } catch (error) {
        res.json({ error: error.message });
    }
});




module.exports = router;