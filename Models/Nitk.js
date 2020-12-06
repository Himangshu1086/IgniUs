
import mongoose from 'mongoose'

const PostNITKSchema = new mongoose.Schema({

   
        branch:
        {
            type:String
        },

        year:
        [{
            year:
            {
                type:String
            },
            course:
            [{
                course:
                {
                    type:String
                },
                post:
                [{
                    title:
                    {
                        type:String
                    },
                    name:
                    {
                        type:String
                    },
                    post:
                    {
                        type:String
                    }
                }]
            }]
        }]
})


export default mongoose.models.nitk || mongoose.model('nitk' ,PostNITKSchema)