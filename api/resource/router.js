const router = require('express').Router();
const resource = require('../../api/resource/model');
// getAll,
// findById



router.get('/', (req, res) => {
    resource.getAll()
        .then(resourceItem => {
            res.json(resourceItem)
        })
        .catch(err => console.log(err))
})



//     Project.findById(req.params.id)
//         .then(i => {
//             res.json(i)
//         })
//         .catch(err => console.log(err))
// })




module.exports = router;