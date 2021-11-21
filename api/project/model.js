const db = require("../../data/dbConfig");



function getAll() {
    return db("projects");
}


function findById(id) {
    return db("projects")
        .where({ id })
        .first();
}


// Did with Zac// check each line you write......
// function find() {
//     return db('schemes as sc')
//         .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
//         .groupBy('sc.scheme_id')
//         .select('sc.*')
//         .count('st.step_id as number_of_steps') // In Knex the last thing you do is orderBy
//         .orderBy('sc.scheme_id', 'ASC')
// }





exports = module.exports = {
    getAll,
    findById
}