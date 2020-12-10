
import initDB from '../../../HELPERS/initDB'
import AdvMath from '../../../Models/advMaths/postForAdv'

initDB()

export default async (req , res )=>{
 
    switch(req.method)
    {
        case "GET" :
            await allPost(req,res);
            break;
        case "POST" :
            await savePost(req , res);
            break;
        case "PUT":
            await addPost(req , res);
            break;
    }
}



const allPost = async (req ,res)=>{

    AdvMath.find().then(posts=>{
        res.status(200).json(posts)
    })
   
}




const savePost = async (req , res) =>{
    const {subjectname , description}= req.body;

    const postSave = await new AdvMath(
        {
            subjectname: subjectname,
            description: description ,
            post:[]

    }).save()
    res.status(201).json(postSave);
    
}






const  addPost = async (req , res)=>{


    try{
        const { subjectname , name ,  date, coverImage , writerImage ,  title , post , descriptionOfwriter} = req.body;

        const newPost = {
            title:title,
            name:name,
            post:post,
            coverImage:coverImage,
            writerImage:writerImage,
            descriptionOfWriter:descriptionOfwriter ,
            date:date   
            }
        
        
           await AdvMath.findOneAndUpdate({
                
            subjectname : subjectname
    
            },
                {
                $push:{
                        post : newPost
                    } 
                }).then(posts=>{
                    res.status(200).json(posts)
            }  
            )
    
     }catch(err){
         console.log(err)
     }
    
}







