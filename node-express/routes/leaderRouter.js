const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all( (req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain');
    next();

})

    .get((req, res, next) => {
        res.end('Will Send All the Leaders to you');
    })

    .post((req, res, next) => {
        res.end('Will add the Leader : ' + req.body.name + 'with details: ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT not supported');
    })

    .delete((req, res, next) => {
        // res.statusCode = 200;
        res.end('Deleting all the leaders');
    });

    leaderRouter.route('/:leaderId').all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain');
        next();
    
    })
        .get((req, res, next) => {
            res.end('Will send details of the Leader' + req.params.leaderId + ' to you');
        })
    
        .post((req, res, next) => {
            res.statusCode = 403;
            res.end('POST not supported');
        })
    
        .put((req, res, next) => {
            res.writeI('Updating the Leader ' + rwq.params.leaderId)
            res.end('Will update the Leader ' + req.body.name + ' for you');
        })
    
        .delete((req, res, next) => {
          
            res.end('Deleting  the Leader ' + req.body.name);
        });

    module.exports = leaderRouter;
