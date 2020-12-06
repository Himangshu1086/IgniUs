
import initDB from '../../../HELPERS/initDB'
import Nitk from '../../../Models/Nitk'
initDB()

export default async (req , res )=>{

    Nitk.find().then(posts=>{
        res.status(200).json(posts)
    })
   

    // const postSave = await new Nitk({
       
    //             branch:"chemical",
    //             year:[
    //                 {
    //                    year:"SECONDYEAR" ,
    //                    course:[
    //                        {
    //                             course:"AM218",
    //                             post:[
    //                                 {
    //                                     title:"ABC",
    //                                     name:"HB",
    //                                     post:"ABCDEFG"
    //                                 },
    //                                 {
    //                                     title:"BCD",
    //                                     name:"JD",
    //                                     post:"DEFGHIJK"
    //                                 }
    //                             ]
    //                        },
    //                        {
    //                            course:"AM200",
    //                            post:[
    //                             {
    //                                 title:"ABC",
    //                                 name:"HB",
    //                                 post:"ABCDEFG"
    //                             },
    //                             {
    //                                 title:"BCD",
    //                                 name:"JD",
    //                                 post:"DEFGHIJK"
    //                             }
    //                         ]
    //                        }
    //                    ]

    //                 },
    //                 {
    //                     year : "THIRDYEAR",
                        
    //                     course:[
    //                         {
    //                              course:"AM318",
    //                              post:[
    //                                  {
    //                                      title:"ABC",
    //                                      name:"HB",
    //                                      post:"ABCDEFG"
    //                                  },
    //                                  {
    //                                      title:"BCD",
    //                                      name:"JD",
    //                                      post:"DEFGHIJK"
    //                                  }
    //                              ]
    //                         },
    //                         {
    //                             course:"AM300",
    //                             post:[
    //                              {
    //                                  title:"ABC",
    //                                  name:"HB",
    //                                  post:"ABCDEFG"
    //                              },
    //                              {
    //                                  title:"BCD",
    //                                  name:"JD",
    //                                  post:"DEFGHIJK"
    //                              }
    //                          ]
    //                         }
    //                     ]

    //                 },
    //                 {
    //                     year:"FORTHYEAR",
    //                     course:[
    //                         {
    //                              course:"AM418",
    //                              post:[
    //                                  {
    //                                      title:"ABC",
    //                                      name:"HB",
    //                                      post:"ABCDEFG"
    //                                  },
    //                                  {
    //                                      title:"BCD",
    //                                      name:"JD",
    //                                      post:"DEFGHIJK"
    //                                  }
    //                              ]
    //                         },
    //                         {
    //                             course:"AM400",
    //                             post:[
    //                              {
    //                                  title:"ABC",
    //                                  name:"HB",
    //                                  post:"ABCDEFG"
    //                              },
    //                              {
    //                                  title:"BCD",
    //                                  name:"JD",
    //                                  post:"DEFGHIJK"
    //                              }
    //                          ]
    //                         }
    //                     ]

    //                 }
    //             ]

            
        





    // }).save()
    // res.status(201).json(postSave);

}
