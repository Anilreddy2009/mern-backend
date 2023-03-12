const express=require ("express");
const router=express.Router();
//const bodyParser=require("body-parser")
const News=require('../newsModel');

router.get("/",async(req,res)=>{
    try{
        const news=await News.find()
        res.json(news);
    }catch(err){
        console.log(err)
    }
})

router.post("/",async(req,res)=>{
    const news=new News({
        author:req.body.author,
        title:req.body.title,
        description:req.body.description,
        imgUrl:req.body.imgUrl,
        content:req.body.content
    })
    try{
        const n1=await news.save();
        res.json(n1);
    }catch(err){
        res.send(err)
    }
})

module.exports=router;