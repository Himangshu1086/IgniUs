
import initDB from '../../../HELPERS/initDB'
import College from '../../../Models/college'
initDB()

export default async (req , res )=>{

    College.find().then(posts=>{
        res.status(200).json(posts)
    })
   

    // const postSave = await new College(
    //     // {
    //     //                         coursename:"AM218",
    //     //                             post:[
    //     //                                 {
    //     //                                     title:"fhfh"
    //     //                                     ,name:"HB"
    //     //                                     ,post:"ABCD"
    //     //                                 },
    //     //                                 {
    //     //                                     title:"HYDRAULIC"
    //     //                                     ,name:"JD"
    //     //                                     ,post:"EFGH "
    //     //                                 }
    //     //                             ]
                                
    //                             {
    //                             coursename:"CV201",
    //                                 post:[
    //                                     {
    //                                         title:"fhfh"
    //                                         ,name:"HB"
    //                                         ,post:"ABCD"
    //                                     },
    //                                     {
    //                                         title:"HYDRAULIC"
    //                                         ,name:"JD"
    //                                         ,post:"EFGH "
    //                                     }
    //                                 ]
                                

                            
                        



    // }).save()
    // res.status(201).json(postSave);

}
