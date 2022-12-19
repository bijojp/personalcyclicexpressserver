import express from 'express'
const app = express()
const port = process.env.PORT || 3000

// const mongoose = require("mongoose");

import mongoose from 'mongoose'

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://bijo:TfE68elk91rxn7zV@cluster0.gbjr68m.mongodb.net/gamedata",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
},(err)=>{

    if(!err){
        console.log("Conected to db");
        res.send("Conected to db");

    }else{
        console.log("error is there");
        console.log(err);
        res.send("error is there");


    }

})


app.post("/post",async(req,res)=>{
    console.log("inside post function");
    // const data = new monmodel({
    //     name:req.body.name,
    //     email:req.body.email,
    //     id:req.body.id
    // });

    // const val = await data.save();
    // res.json(val); 

    // // res.send("posted"); 
})



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })







// app.all('/', (req, res) => {
//     console.log("Just got a request! from server")

//     // res.send("a new sentence")

//     // res.send(`Example app listening on port ${port}`); 
//     res.send('Response from bijo' + req.ip);


// })
// app.listen(port)



// import express from 'express'
// const app = express()
// const port = process.env.PORT || 3000

// // app.get('/', (req, res) => {
// //   console.log('Response from bijo' + req.ip);
// //   res.send('Response from bijo' + req.ip);
// // })

// // const mongoose = require("mongoose");

// import mongoose from 'mongoose'


// app.use(express.json());

// // app.use(cors({origin:true}));

// mongoose.connect("mongodb+srv://bijo:TfE68elk91rxn7zV@cluster0.gbjr68m.mongodb.net/gamedata",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },(err)=>{

//     if(!err){
//         console.log("Conected to db");
//         res.send("Conected to db");

//     }else{
//         console.log("error is there");
//         console.log(err);
//         res.send("error is there");


//     }

// })


// //schema
// // const sch = {
// //     name:String,
// //     email:String,
// //     id:Number
// // }
// // const monmodel = mongoose.model("NEWCOL",sch);


// //post
// app.post("/post",async(req,res)=>{
//     console.log("inside post function");
//     // const data = new monmodel({
//     //     name:"testnameiadded",
//     //     email:"testemailiadded",
//     //     id:4214525
//     // });

//     const data = {
//         name:"testnameiadded",
//         email:"testemailiadded",
//         id:4214525
//     };

//     const val = await data.save();

//     res.json(val); 
//     // res.json({
//     //     name:"testnameiadded",
//     //     email:"testemailiadded",
//     //     id:4214525
//     // }); 

//     res.send("posted"); 
// })



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)

//   res.send(`Example app listening on port ${port}`); 

// })