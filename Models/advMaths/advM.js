
import mongoose from 'mongoose'

const AdvMathSchema = new mongoose.Schema({

   
        classname:
        {
            type:String
        },
        description:
        {
            type:String
        },

        subject:
        [{
            subjectname:
            {
                type:String
            },
            description:
            {
                type:String
            }
        }]
})


export default mongoose.models.advancedMaths || mongoose.model('advancedMaths' ,AdvMathSchema)