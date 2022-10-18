'use strict';

const ip = require('request-ip');

const router = (app) => {
    app.get('/ip', (req, res) => {
        res.status(200).send(ip.getClientIp(req));
    });
};

// export router
module.exports = router;