const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/member",{useNewUrlParser:true})
.then(()=>{
    console.log("connection  successful");
}).catch((err)=>{
    console.log(err);
})