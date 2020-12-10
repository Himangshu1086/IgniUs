
import mongoose from 'mongoose'

const class10Schema = new mongoose.Schema({

            subjectname:
            {
                type:String
            },
            description:
            {
                type:String
            },
            chapter:
            [{
                    chaptername:
                    {
                        type:String
                    }
                }]
}
)


export default mongoose.models.classTenSubject || mongoose.model('classTenSubject' ,class10Schema)