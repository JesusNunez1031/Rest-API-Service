'use strict';

const router = (app) => {
    app.get('/ping', (req, res) => {
        res.status(200).send('Agent is live!');
    });
};

// export router
module.exports = router;