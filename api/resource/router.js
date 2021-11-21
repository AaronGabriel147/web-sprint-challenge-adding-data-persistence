const router = require('express').Router();
const Resource = require('../../api/resource/model');
// getAll,
// findById



router.get('/', (req, res, next) => {
    Resource.getAll()
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
    Resource.findById(req.params.id)
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
        const resourceVariable = await Resource.create(req.body); // req.body is the object that was sent in the request
        // console.log(project)
        // if (!project.project_name || !project.project_description || !project.project_completed) {
        if (!resourceVariable) {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        } else {
            res.status(200).json(resourceVariable)
        }
    } catch (err) {
        next(err);
    }
})



module.exports = router;