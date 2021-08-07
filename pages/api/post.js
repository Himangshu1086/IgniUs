
import initDB from '../../HELPERS/initDB'
import Post from '../../Models/Post'
initDB()

export default async (req , res )=>{

    switch(req.method)
    {
        case "GET" :
             await allPost(req,res);
            break;
        case "POST":
             await savePost(req , res);
             break;
    }

   
}


const allPost = async (req ,res)=>{

    Post.find().then(posts=>{
        res.status(200).json(posts)
    })
}

const savePost = async (req , res) =>{
    const {writerName ,postCategory,college ,JEEMains,JEEAdvanced,branch ,classXIIpercentage,XIICollege , postTitle , post,imageUrl , smallPost} = req.body;
    const postSave = await new Post({
        writerName,postCategory ,college ,JEEMains,JEEAdvanced,branch ,classXIIpercentage,XIICollege , postTitle , post,imageUrl , smallPost
    }).save()
    res.status(201).json(postSave);
}