const express = require('express');
const router = express.Router();
const { getAll } = require('../../models/medico.model');

router.get('/', async (req, res) => {
	try{
		const medicos = await getAll();
		res.json(medicos);

	}catch(error){
		res.json({error: error.message});
	}
});

router.put('/', async (req, res) => {
    try {
        const result = await create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
});




// router.put('/:idMedico', (req, res) => {
//     res.send('put api medicos');
// });

// router.delete('/:idMedico', (req, res) => {
//     res.send('delete api medicos');
// });


module.exports = router;