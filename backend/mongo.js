const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/StreetParking')
.then(()=>{
    console.log("database connected successfully")
})
.catch(()=>{
    console.log("error occured while connecting database")
})

const penaltySchema=mongoose.Schema({
    "v_type":{
        type:String,
        required:true
    },
    "v_no":{
        type:String,
        required:true
    },
    "penalty":{
        type:String,
        requried:true
    },
    "time":{
        type:String,
        required:true
    }
})

const penaltyTable= mongoose.model('Penalty Table',penaltySchema);
module.exports=penaltyTable;