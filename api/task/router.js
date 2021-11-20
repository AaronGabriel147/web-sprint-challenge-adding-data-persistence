const router = require('express').Router();

// connected to server.js
router.get('/', (req, res) => {
    res.json({
        message: 'Tasks router sanity check.'
    });
});


module.exports = router;