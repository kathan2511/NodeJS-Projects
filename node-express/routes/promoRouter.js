const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain');
    next();

})

    .get((req, res, next) => {
        res.end('Will Send All the Promos to you');
    })

    .post((req, res, next) => {
        res.end('Will add the Promos : ' + req.body.name + 'with details: ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT not supported');
    })

    .delete((req, res, next) => {
        // res.statusCode = 200;
        res.end('Deleting all the promos');
    });
promoRouter.route('/:promoId').all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain');
    next();

})
    .get((req, res, next) => {
        res.end('Will send details of the Promotion ' + req.params.promoId + ' to you');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST not supported');
    })

    .put((req, res, next) => {
        res.writeI('Updating the Promotion ' + rwq.params.promoId)
        res.end('Will update the Promotion ' + req.body.name + ' for you');
    })

    .delete((req, res, next) => {

        res.end('Deleting  the Promotion ' + req.body.name);
    });

module.exports = promoRouter;
