const { executeQueryUnique } = require("../helpers")

const getById = (habitacionId) => {
    return executeQueryUnique('select * from habitaciones where id = ?', [habitacionId]);
}

module.exports = { getById };