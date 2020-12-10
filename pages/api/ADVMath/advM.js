
import initDB from '../../../HELPERS/initDB'
import AdvMath from '../../../Models/advMaths/advM'

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

const allPost = async(req , res)=>{
    
    AdvMath.find().then(posts=>{
        res.status(200).json(posts)
    })
}




const addPost =  async(req , res)=>{
    try{
        const { classname , subjectname ,description} = req.body;
    
        const newPost = {
            subjectname:subjectname,
            description:description, 
            }
        
        
           await AdvMath.findOneAndUpdate({
                
            classname :classname
    
            },
                {
                $push:{
                            subject : newPost
                    } 
                }).then(posts=>{
                    res.status(200).json(posts)
            },

            {useFindAndModify:false}  
            )
    
     }catch(err){
         console.log(err)
     }
}