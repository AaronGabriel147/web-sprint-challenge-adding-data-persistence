const router = require('express').Router();



const task = require('../../api/task/model');
// getAll,



// Sanity check, connected.
// router.get('/', (req, res) => {
//     res.json({
//         message: 'Tasks router sanity check.'
//     });
// });


// Get all tasks. Works but no Seeds, returns empty array.
router.get('/', (req, res) => {
    task.getAll()
        .then(taskItem => {
            res.json(taskItem)
        })
        .catch(err => console.log(err))
})


module.exports = router;