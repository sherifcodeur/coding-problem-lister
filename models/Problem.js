
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

        resolved:{
            type:Boolean,
            default:false,
        },
        description:{
            type:String,
        },
        rate:{
            type:Number,
            min:1,
            max:10,
            //pilou:"moki"
        },
        category:{
            type:String,
            default:"other"
        },
        type:{
            type:String,
            default:"how to"
        },
        email:{
            type:String,
            
        }
        
    
    },     
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        { timestamps: true }
    );


    // creating model Problem based on the problem schema
    const Problem = mongoose.model('problem',problemSchema);


    // // we want to loop through the fields and send an object that will help us generate the crud   
    // // extracts the paths (c a dire les fields)
    // const testo =  problemSchema.paths ;  

    
    // for(key in testo){
    //     // this gives us the field name
    //     console.log(key)

    //     // this gives us the type of field
    //     console.log(testo[key].instance)
    // }



    

    

   



    //exporting the model Problem
    module.exports =  Problem ;