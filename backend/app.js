const express=require('express')
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser')
const penaltyTable =require('./mongo')


app.use(cors())
app.use(express.json())
// app.use(express.bodyParser());

app.get('/',(req,res)=>{
    res.json("This backend is working")
})
app.get('/penalties',async(req,res)=>{
    const data=await penaltyTable.find();
    res.json(data)
})
app.post('/penalties',async(req,res)=>{
    try{
        const data=new penaltyTable({
          "v_type":req.body.v_type,
          "v_no":req.body.v_no,
          "penalty":req.body.penalty,
          "time":req.body.time
        })
        await data.save();
        console.log("data saved successfully via post")
    }
    catch{
        console.log("this is catch block")
    }
})
app.listen(8080,()=>{
    console.log("server running on port 8080")
})