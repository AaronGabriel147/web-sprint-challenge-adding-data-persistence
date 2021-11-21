const db = require("../../data/dbConfig");





function getAll() {
    return db("resources");
}


function findById(id) {
    return db("xxxxxxxxxxxxxxxxx")
        .where({ id })
        .first();
}







exports = module.exports = {
    getAll,
    findById
}