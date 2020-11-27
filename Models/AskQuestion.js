import mongoose from 'mongoose'

const questionsSchema  = new mongoose.Schema({

    userName :{

        type:String,
        required : true
    },

     Email:{
        
        type:String,
        required : true
    },
    
    
    Questions : {

        type:String,
        required : true
    }


},
{timestamps:true}
)


export default mongoose.models.question || mongoose.model('question' , questionsSchema)