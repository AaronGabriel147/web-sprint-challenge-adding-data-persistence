const router = require('express').Router();
const Project = require('../../api/project/model');
// getAll
// findById
// create



// √ [1] can get all projects that exist in the table (123 ms)                                   
// × [2] each project contains project_name, project_description and project_completed (as a boolean) (76 ms) 
router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
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





// each project contains project_name, project_description and project_completed (as a boolean) (82 ms)

// In order to test for errors:
// 404 = enter an empty object into the body of the request { }
// Not Sure how to test this 500 - ask Zac.
router.post('/', async (req, res, next) => {
    try {
        const project = await Project.create(req.body); // req.body is the object that was sent in the request
        console.log(project)
        // if (!project.project_name || !project.project_description || !project.project_completed) {
        if (!project) {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        } else {
            res.status(200).json(project)
        }
    } catch (err) {
        next(err);
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