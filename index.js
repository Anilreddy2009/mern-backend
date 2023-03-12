const express=require ("express");
const mongoose=require ("mongoose");
const router=require("./routers/news");
const app=express();
const url="mongodb+srv://Anilreddy_2009:Anilreddys1@cluster0.ili4rd0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
const con=mongoose.connection
app.use(express.json())
app.get("/",(req,res)=>{
    res.send('working');
})
app.use("/news",router)
con.on('open',()=>{
    console.log('connected....')
})

app.listen(9000,()=>{
    console.log("server started");
})