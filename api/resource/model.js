const db = require("../../data/dbConfig");



function getAll() {
    return db("resources")
    // return db("resources") || [];

}


function findById(idArg) {
    // console.log("model")
    return db("resources")
        .where({ resource_id: idArg })
        .first();
}

async function create(arg) {
    const [id] = await db('resources').insert(arg)
    return findById(id)
}




exports = module.exports = {
    getAll,
    create,
    findById
}