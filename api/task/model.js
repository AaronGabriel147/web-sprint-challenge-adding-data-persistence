const db = require("../../data/dbConfig");




async function getAll() {
    const intToBool = await db("tasks");
    intToBool.map(item => {
        item.task_completed === 1 ? item.task_completed = true : item.task_completed = false;
    })
    return intToBool;
}

function findById(idArg) {
    return db("tasks")
        .where({ task_id: idArg })
        .first();
}


async function create(argTask) {
    const [id] = await db('tasks').insert(argTask)
    return findById(id)
}



exports = module.exports = {
    getAll,
    findById,
    create,
}