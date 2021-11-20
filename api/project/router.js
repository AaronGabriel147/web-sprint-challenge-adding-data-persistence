const router = require('express').Router();



// @@@@@@@ Router model imports look like this:
// // Models
// const User = require('../../api/users/user-model')
// // getAll



// connected to server.js
router.get('/', (req, res) => {
    res.json({
        message: 'Project router sanity check.'
    });
});


module.exports = router;

