// @@@@@@@@@@@@@@@@@@@@ models require data sorta like:
const db = require("../../data/dbConfig");



// @@@@@@@@@@@@@@@@@@@@@ Then basic functions:
function getAll() {
    return db("Tables");
}

// function findById(id) {
//     return db("users")
//         .where({ id })
//         .first();
// }



// @@@@@@@@@@@@@@@@@@@ Then Exports
exports = module.exports = {
    getAll,
    // findById
}