const mongoose =  require("mongoose");
mongoose.connect("mongodb+srv://Ankit7987:<Iiitg@123>@cluster0.ggmky.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritmongodb+srv://Ankitr9981:Iiitg123@cluster0.ggmky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    
}).then(()=>{
    console.log(`connetion successful`);
}).catch((err)=>{
    console.log(err);
})