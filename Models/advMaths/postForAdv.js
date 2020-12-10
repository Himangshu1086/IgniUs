
import mongoose from 'mongoose'

const AdvMathSchema = new mongoose.Schema({

            subjectname:
            {
                type:String
            },
            description:
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
                    },
                    coverImage:
                    {
                        type:String
                    },
                    writerImage:
                    {
                        type:String
                    },
                    descriptionOfWriter:
                    {
                        type:String
                    },
                    date:
                    {
                        type:String
                    }
                },{timestamps:true}]
},
)


export default mongoose.models.advancedMathsPost || mongoose.model('advancedMathsPost' ,AdvMathSchema)