
    // Problem Model


    //importing external dependencies
    const mongoose = require('mongoose');



    // creating Problem Schema
    const Schema = mongoose.Schema;
    const problemSchema = new Schema({

        name : {
            type:String,
            required:[true,'required field'],       
        },
    
    },     
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        { timestamps: true }
    );


    // creating model Problem based on the problem schema
    const Problem = mongoose.model('problem',problemSchema);



    //exporting the model Problem
    module.exports =  Problem ;