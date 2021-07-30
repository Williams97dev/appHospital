const express = require('express');
const { create } = require('../models/paciente.model');
const router = express.Router();

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