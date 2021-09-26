// all routes for Problem Model
    const express = require('express');
    const router = express.Router();
    const problemController = require('../controllers/Problem');
    
    
    
    
    router.get('/', problemController.index)
    
    router.post('/', problemController.save)

    router.get('/create', problemController.create)
    
    router.get('/show/:id',problemController.show)
    
    router.put('/update/:id',problemController.update)

    router.get('/edit/:id',problemController.edit)
    
    router.get('/delete/:id',problemController.destroy)
    
    router.get('/search',problemController.search)
    
    module.exports = router ;
    