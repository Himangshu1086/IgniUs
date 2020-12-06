import mongoose from 'mongoose'
const postsSchema  = new mongoose.Schema({

                 yearname:{type:String},
                            course:[
                                {
                                    coursename:{type:String}
                                }
                            ]  
                        
                   
})


export default mongoose.models.course || mongoose.model('course' , postsSchema)