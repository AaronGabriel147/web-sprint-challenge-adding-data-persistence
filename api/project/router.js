const router = require('express').Router();




// @@@@@@@ Router model imports look like this:
// // Models
// const User = require('../../api/users/user-model')
// // getAll

const projectModel = require('../../api/project/model');
// getAll,
// findById


// connected to server.js
router.get('/', async (req, res) => {
    return await projectModel.getAll()
    // res.json({
    //     message: 'Project router sanity check.'
    // });
});


module.exports = router;

