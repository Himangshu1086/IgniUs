import mongoose from 'mongoose'
const postsSchema  = new mongoose.Schema({

                 branchname:{type:String},
                            year:[
                                {
                                    yearname:{type:String},
                                    
                                }
                            ]  
                        
                   
})


export default mongoose.models.year || mongoose.model('year' , postsSchema)