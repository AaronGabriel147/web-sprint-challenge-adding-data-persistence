const db = require("../../data/dbConfig");







function getAll() {
    return db("tasks");
    // return db("database");
}


function findById(id) {
    return db("xxxxxxxxxxxx")
        .where({ id })
        .first();
}






exports = module.exports = {
    getAll,
    findById
}