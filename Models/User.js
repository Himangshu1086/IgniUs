import mongoose from 'mongoose'

const usersSchema  = new mongoose.Schema({

    username :{

        type:String,
        required : true
    },

     Email:{
        
        type:String,
        required : true,
        unique:true
    },
    
    
    password : {

        type:String,
        required : true,

    },
    role:{
        type:String,
        required:true,
        default:"admin",
        enum:['admin' , 'user']
    }



}
)


export default mongoose.models.user || mongoose.model('user' , usersSchema)