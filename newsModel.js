const mongoose=require ("mongoose");

const newsSchema=new mongoose.Schema({
    author:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    imgUrl:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
})

const news=mongoose.model('News',newsSchema);
module.exports=news;
