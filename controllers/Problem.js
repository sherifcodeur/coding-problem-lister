
    
    const Problem = require('../models/Problem')



// retrieve all problems in the database
const index = async (req,res)=>{

    let response = {};


    //this code is to fetch all problems withtout pagination
    try {
        const allProblem = await Problem.find();
        if(! allProblem){
           // there is nothing to show but success
            res.render('./admin/Problem/index',{'problems':null});
        }else{
            // we show all problems
            console.log(allProblem)
            res.render('./admin/Problem/index',{'problems':allProblem});
        }        
    } catch (error) {
        // there is an error we send status 500
        res.status(500).send(error);        
    }


    




}

const create = async(req,res)=>{

    res.render('./admin/Problem/create')

}





// add a new problem to the database
const save = async (req,res)=>{

    //console.log("le body",typeof req.body)

    let response = {};

    try {
        
        if(req.body.resolved =='on'){

                    req.body.resolved = true;
                }
        const newProblem = await new Problem(req.body); 

       

        console.log("le body",req.body)
        
        newProblem.save()
        .then(()=>{

            res.redirect('/admin/problems');

        })
        .catch(e=>{
            
            console.log("erreur 1",e)

            res.status(500).send(response);
        })

                       
        
    } catch (error) {

        //console.log("erreur 2",error);

        res.status(500).send(response)
        
    }  


}


// show details of a problem
const show = async (req,res)=>{

    let result = {};

    try {

        let id = req.params.id;

        let oneProblem = await Problem.findById(id);

        if(!oneProblem){

            throw new Error("no such problem")
        }else{

            res.status(200).render('./admin/Problem/show',{'problem':oneProblem});
        }

        

        
    } catch (error) {

        console.log("erreur 1",error);

        //result = {error:error.message}

        res.status(400).send(error)
        
    }

}

const edit = async(req,res)=>{


    let result = {};

    try {

        let id = req.params.id;

        let oneProblem = await Problem.findById(id);

        if(!oneProblem){

            throw new Error("no such problem")
        }else{

            res.status(200).render('./admin/Problem/edit',{'problem':oneProblem});
        }

        

        
    } catch (error) {

        console.log("erreur 1",error);

        //result = {error:error.message}

        res.status(400).send(error)
        
    }



}


/// update a problem details in the database
const update = async(req,res)=>{

    let result = {}

    try {

        let id = req.params.id;

        let updatedProblem = await Problem.findByIdAndUpdate(id,req.body,{new:true})

        if(!updatedProblem){

            throw new Error("no such problem")
        }else{

            res.status(200).send(updatedProblem)
        }
        
    } catch (error) {

        console.log(error)

        res.status(400).send(error)

        
    }



}

// delete a problem from the database
const destroy = async (req,res)=>{

    let result = {}

    try {

        let id = req.params.id; 

        let deletedProblem = await Problem.findByIdAndDelete(id)

        if(!deletedProblem){

            throw new Error("nothing to delete")
        }else{

            res.status(200).redirect('/admin/problems')
        }
        
    } catch (error) {

        console.log(error)

        res.status(400).send(error)

        
    }    


}

// search by name 
const search = async(req,res)=>{

    const query = req.query;

    // let response = {};

    try {

        const searchResult = await Problem.find(  {"name":{$regex:req.query.name,$options:'$i'}} );

        if(!searchResult){

            throw new Error("no problems in the database");
        }else{

            res.status(200).send(searchResult);
        }
        
    } catch (error) {

        res.status(500).send(error);

        
    }


}

module.exports = {

    index,
    save,
    create,
    show,
    edit,
    update,
    destroy,
    search


}