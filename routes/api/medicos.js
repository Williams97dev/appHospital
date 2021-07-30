const express = require('express');
const router = express.Router();
const { getAll, create } = require('../../models/medico.model');

router.get('/', async (req, res) => {
	try{
		const medicos = await getAll();
		res.json(medicos);

	}catch(error){
		res.json({error: error.message});
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


module.exports = router;