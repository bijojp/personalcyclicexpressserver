const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());

// app.use(cors({origin:true}));

mongoose.connect("mongodb+srv://bijo:TfE68elk91rxn7zV@cluster0.gbjr68m.mongodb.net/gamedata",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{

    if(!err){
        console.log("Conected to db");
    }else{
        console.log("error is there");
        console.log(err);

    }

})


//schema
const sch = {
    name:String,
    email:String,
    id:Number
}
const monmodel = mongoose.model("NEWCOL",sch);


//post
app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const data = new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });

    const val = await data.save();
    res.json(val); 

    // res.send("posted"); 
})


exports.expressApi = functions.https.onRequest(app);

// app.listen(3000,()=>{
//     console.log("on port")
// })