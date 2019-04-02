const express = require('express')
const Router = express.Router;
const {
    create, 
    retrieveAll, 
    update, 
    deleter
} = require('../controllers/thinkpad');


const thinkpadRoutes = Router();

thinkpadRoutes.get('/', retrieveAll);

thinkpadRoutes.post('/', create);

thinkpadRoutes.put('/', update);

thinkpadRoutes.delete('/', deleter);



module.exports = thinkpadRoutes;