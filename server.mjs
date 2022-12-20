import express, { json } from "express";
import res from "express/lib/response";
import { connect, model } from "mongoose";
const app = express();
app.use(json());


//Database connection set up
connect("mongodb+srv://bijo:TfE68elk91rxn7zV>@cluster0.gbjr68m.mongodb.net/gamedata?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(!err){
        console.log("Connected to db");
    }else{
        console.log("error is there");
    }
})


// //Schema--Table/collection creation
// const sch={
// name:String,
// email: String,
// id:Number
// }
// const monmodel=model("NEWCOL",sch);
// //POST
// app.post("/post",async(req, res)=>{
//   console.log("Inside post function");
// const data=monmodel({
//   name: req.body.name,
//   email: req.body.email,
//   id: req.body.id
// });
// const val= await data.save();
// res.send("Posted");
// })
// //PUT
// app.put("/update/:id",async(req,res)=>{
//   let upid=req.params.id;
//   let upname=req.body.name;
//   let upemail=req.body.email;
//   //Find & Update
//   monmodel.findOneAndUpdate({id:upid},{$set:{name:upname,email:upemail}},{new:true},(err,data)=>{
// if(err)
//     res.send("ERROR !!");
// else
// {
// if(data==null)
// res.send("Nothing found");
// else
// res.send(data);
// }
//   });//err,data arrow function closing
// });//req,res arrow function closing
// //FETCH GET
// app.get("/fetch/:id",(req,res)=>{
//     let fetchid=req.params.id;
//     monmodel.find(({id:fetchid}),(err,val)=>{
//     res.send(val);
//     });
// })
app.listen(3000,()=>{
    console.log("on port 3000")
})