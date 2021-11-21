const router = require('express').Router();

const Task = require('../../api/task/model');
// getAll,

// Sanity check, connected.
// router.get('/', (req, res) => {
//     res.json({
//         message: 'Tasks router sanity check.'
//     });
// });


router.get('/', (req, res, next) => {
    Task.getAll()
        .then(item => {
            res.json(item)
        })
        .catch(next)
})


router.get('/:id', (req, res, next) => {
    Task.findById(req.params.id)
        .then(item => {
            if (!item) {
                res.status(404).json({
                    message: "The post with the specified ID does not exist"
                })
            } else {
                // throw new Error("Something went wrong");
                res.status(200).json(item)
            }
        })
        .catch(next);
});



router.post('/', async (req, res, next) => {
    try {
        const newTask = await Task.create(req.body); // req.body is the object that was sent in the request
        if (!newTask) {
            res.status(404).json({
                message: "The task post with the specified ID does not exist"
            })
        } else {
            res.status(200).json(newTask)
        }
    } catch (err) {
        next(err);
    }
})



module.exports = router;