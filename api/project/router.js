const router = require('express').Router();
const Project = require('../../api/project/model');
// getAll
// findById
// insert


// CONNECTED!!!!!!
router.get('/', (req, res) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => console.log(err))
})




// Get by ID
// In order to test for errors: 
// 404 = input an ID that does not exist into the URL
// 500 = use a valid ID in the URL, then, comment out the 200, and uncomment the throw new Error
router.get('/:id', (req, res, next) => {
    Project.findById(req.params.id)
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
        const project = await Project.insert(req.body); // req.body is the object that was sent in the request
        res.status(201).json(project)
    } catch (next) {
        next()
    }
})







// router.post('/', validateUser, (req, res, next) => {
//     // RETURN THE NEWLY CREATED USER OBJECT    
//     // this needs a middleware to check that the request body is valid
//     Users.insert(req.body)
//         .then(user => {
//             res.status(201).json(user);    
//         })
//         .catch(next);
// });










module.exports = router;