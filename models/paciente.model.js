const { executeQuery } = require("../helpers")

const getAll = ()=>{
    return executeQuery(
        'SELECT * FROM pacientes'   
    );
};

module.exports = {
    getAll
};