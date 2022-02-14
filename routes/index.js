const router = require('express').Router();

const apiROutes = require('./api');

router.use('./api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;