const { executeQuery } = require("../helpers")

const getAll = () => {
    return executeQuery(
        'SELECT * FROM medicos'
    );
};

module.exports = {
    getAll
};