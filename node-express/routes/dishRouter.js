const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain');
    next();

})

    .get((req, res, next) => {
        res.end('Will Send All the Dishes to you');
    })

    .post((req, res, next) => {
        res.end('Will add the dish : ' + req.body.name + 'with details: ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT not supported');
    })

    .delete((req, res, next) => {
        // res.statusCode = 200;
        res.end('Deleting all the dishes');
    });

dishRouter.route('/:dishId').all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain');
    next();

})
    .get((req, res, next) => {
        res.end('Will send details of the dish' + req.params.dishId + ' to you');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST not supported');
    })

    .put((req, res, next) => {
        res.writeI('Updating the dish ' + rwq.params.dishId)
        res.end('Will update the dish ' + req.body.name + ' for you');
    })

    .delete((req, res, next) => {
      
        res.end('Deleting  the dishe ' + req.body.name);
    });

module.exports = dishRouter;
