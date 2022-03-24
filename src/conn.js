const mongoose =  require("mongoose");
mongoose.connect("mongodb://localhost:27017/portfolio",{
    
}).then(()=>{
    console.log(`connetion successful`);
}).catch((err)=>{
    console.log(err);
})