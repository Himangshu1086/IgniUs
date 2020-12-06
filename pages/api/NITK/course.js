
import initDB from '../../../HELPERS/initDB'
import Course from '../../../Models/course'
initDB()

export default async (req , res )=>{

    Course.find().then(posts=>{
        res.status(200).json(posts)
    })
   

    // const postSave = await new Course(
    //     {
    //                             yearname:"ME FORTHYEAR",
    //                                 course:[
    //                                     {
    //                                         coursename:"AM200"
    //                                     },
    //                                     {
    //                                         coursename:"AM216"
    //                                     },
    //                                     {
    //                                         coursename:"AM218"
    //                                     },
    //                                     {
    //                                         coursename:"AM219"
    //                                     },
    //                                     {
    //                                         coursename:"CV201"
    //                                     },
    //                                     {
    //                                         coursename:"CV202"
    //                                     },
    //                                     {
    //                                         coursename:"MA207"
    //                                     }
    //                                 ]
                                

    // }).save()
    // res.status(201).json(postSave);

}
