const mongoose=require ("mongoose");

const newsSchema=new mongoose.Schema({
  title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    urlToImage:{
        type:String,
        require:true
    }
})

const news=mongoose.model('News',newsSchema);
module.exports=news;
