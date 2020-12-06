
import initDB from '../../../HELPERS/initDB'
import Year from '../../../Models/year'
initDB()

export default async (req , res )=>{

    Year.find().then(posts=>{
        res.status(200).json(posts)
    })
   

    // const postSave = await new Year(
    //     {
    //                             branchname:"MECHANICAL ENGINEERING",
    //                                 year:[
    //                                     {
    //                                         yearname:"SECONDYEAR"
    //                                     },
    //                                     {
    //                                         yearname:"THIRDYEAR"
    //                                     },
    //                                     {
    //                                         yearname:"FORTHYEAR"
    //                                     }
    //                                 ]
                                

    // }).save()
    // res.status(201).json(postSave);

}
