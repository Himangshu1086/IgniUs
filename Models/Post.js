import mongoose from 'mongoose'
const postsSchema  = new mongoose.Schema({

    writerName :{

        type:String,
        required : true
    },
    postTitle : {

        type:String,
        required : true
    },
    
    post : {

        type:String,
        required : true
    },
    college : {

        type:String
        
    },
    JEEMains : {

        type:String
        
    },
    JEEAdvanced : {

        type:String
       
    },
    branch : {

        type:String
        
    },
    classXIIpercentage : {

        type:String,
       
    },
    XIICollege : {

        type:String
        
    },
    imageUrl : {

        type:String
        
    },
    smallPost : {

        type:String,
        required : true
    }
},
{timestamps:true}

)


export default mongoose.models.post || mongoose.model('post' , postsSchema)