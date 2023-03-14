const express=require ("express");
const mongoose=require ("mongoose");
const News=require('./newsModel');
const app=express();
const url="mongodb+srv://Anilreddy_2009:Anilreddys1@cluster0.mgsx3oj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
const con=mongoose.connection
app.use(express.json())
app.get("/",(req,res)=>{
    res.send('working');
})

con.on('open',()=>{
    console.log('connected....')
})

app.get("/news",async(req,res)=>{
    try{
        const news=await News.find()
        res.json(news);
    }catch(err){
        console.log(err)
    }
})

app.post("/news",async(req,res)=>{
    const news=new News({
        title:req.body.title,
        description:req.body.description,
        url:req.body.url,
        urlToImage:req.body.urlToImage
    })
    try{
        const n1=await news.save();
        res.json(n1);
    }catch(err){
        res.send(err)
    }
})
app.listen(9000,()=>{
    console.log("server started");
})
