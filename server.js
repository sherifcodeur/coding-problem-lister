
    // importing dependencies
    const { render } = require('ejs');
const express = require('express');
    const dotenv = require('dotenv').config();
    const dbconnect = require('./database/connection');
    
    //importing routes - example company routes -
    const problemRoutes = require('./routes/problemRoutes');
    
    // PORT defined in the env file
    const PORT = process.env.PORT || 3000;
    
    
    // initializing express application
    const app = express();


    // setting up the template engine
    app.set('view engine', 'ejs');
    
    // connect to the database
    dbconnect;
    
    
    
    // Request payload middleware
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // making the public folder accessible
    app.use(express.static('public'));
    
    
    // Handle custom routes - add the custom routes
    // app.use('/api/v1/user', require('./routes/userRoutes'))


    // route admin principales
    app.get('/admin',(req,res)=>{

      res.render('./admin/index')
    })

    // les routes admin a proteger
    app.use('/admin/problems',problemRoutes);
    
    
    // checks if server is working
    app.get('/', (req, res, next) => {
      res.send('Hello from my Express server v2!')
    })
    

    // app listens on the selected Port
    app.listen(PORT, () => {
      console.log("Server listening ")
    })
    