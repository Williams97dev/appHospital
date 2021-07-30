const express = require('express');
const router = express.Router();
const { getAll, create } = require('../models/paciente.model');

router.get('/', async (req, res) => {
	try {
		const pacientes = await getAll();
		res.render('pacientes', {
			pacientes: pacientes,
			title: 'Listado de pacientes'
		});

	} catch (error) {
		console.log({ error: error.message });
	}
});



router.get('/new', (req, res)=>{
    res.render('pacientes/new');
});

router.post('/create',async (req, res)=>{
    try{
        req.body.fecha_registro = new Date();
        await create(req.body);
        res.redirect('/pacientes');
    }catch(error){
        console.log(error);
    }
    
});

module.exports = router;