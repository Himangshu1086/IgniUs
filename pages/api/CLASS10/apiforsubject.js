import initDB from '../../../HELPERS/initDB'
import Class10 from '../../../Models/CLASS10/modelforchapter'

initDB()

export default async (req , res )=>{

    switch(req.method)
    {
        case "GET" :
            await allPost(req,res);
            break;
        case "PUT":
            await addPost(req , res);
            break;
    }

}


const allPost = async (req ,res)=>{

    Class10.find().then(posts=>{
        res.status(200).json(posts)
    })
   
}


const  addPost = async (req , res)=>{


    try{
        const { chaptername , subjectname} = req.body;

        const newPost = {
            chaptername:chaptername   
            }
        
        
           await Class10.findOneAndUpdate({
                
            subjectname : subjectname
    
            },
                {
                $push:{
                        chapter : newPost
                    } 
                }).then(posts=>{
                    res.status(200).json(posts)
            }  
            )
    
     }catch(err){
         console.log(err)
     }
    
}
