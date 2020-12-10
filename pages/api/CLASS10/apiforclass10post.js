
import initDB from '../../../HELPERS/initDB'
import Class10 from '../../../Models/CLASS10/classTenPost'

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

    Class10.find().then(posts=>{
        res.status(200).json(posts)
    })
   
}




const savePost = async (req , res) =>{
    const {chaptername , description}= req.body;

    const postSave = await new Class10(
        {
            chaptername: chaptername,
            description: description , 
            post:[]

    }).save()
    res.status(201).json(postSave);
    
}




const  addPost = async (req , res)=>{


    try{
        const { chaptername , name ,  date, coverImage , writerImage ,  title , post , descriptionOfwriter} = req.body;

        const newPost = {
            title:title,
            name:name,
            post:post,
            coverImage:coverImage,
            writerImage:writerImage,
            descriptionOfWriter:descriptionOfwriter ,
            date:date   
            }
        
        
           await Class10.findOneAndUpdate({
                
            chaptername : chaptername
    
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







