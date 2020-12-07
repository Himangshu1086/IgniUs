import mongoose from 'mongoose'
const postsSchema  = new mongoose.Schema({

                 coursename:{type:String},
                            post:[
                                {
                                    title:{type:String},
                                    name:{type:String},
                                    post:{type:String},
                                    date :{type:String},
                                    coverImg:{type:String},
                                    personImg:{type:String}

                                }
                            ]  
                        
                   
})


export default mongoose.models.college || mongoose.model('college' , postsSchema)