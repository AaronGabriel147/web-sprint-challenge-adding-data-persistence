const router = require('express').Router();

// connected to server.js
router.get('/', (req, res) => {
    res.json({
        message: 'Project router sanity check.'
    });
});


module.exports = router;

