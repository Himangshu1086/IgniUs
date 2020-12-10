
import mongoose from 'mongoose'

const class10Schema = new mongoose.Schema({

            chaptername:
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
                }]
}
)


export default mongoose.models.classTenPost || mongoose.model('classTenPost' ,class10Schema)