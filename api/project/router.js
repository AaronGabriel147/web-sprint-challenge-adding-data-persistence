const router = require('express').Router();
const Project = require('../../api/project/model');
// getAll,
// findById



// CONNECTED!!!!!!
router.get('/', (req, res) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => console.log(err))
})


// look at old repo
// router.get('/:id', (req, res) => {


//     Project.findById(req.params.id)
//         .then(i => {
//             res.json(i)
//         })
//         .catch(err => console.log(err))
// })






module.exports = router;