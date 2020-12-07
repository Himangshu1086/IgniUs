
import initDB from '../../../HELPERS/initDB'
import College from '../../../Models/college'
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
        case "PUT":
            await addPost(req , res);
            break;
    }
}



const allPost = async (req ,res)=>{

    College.find().then(posts=>{
        res.status(200).json(posts)
    })
   
}

const savePost = async (req , res) =>{
    const {coursename}= req.body;

   const postSave = await new College(
        {
            coursename:coursename,
            post:[]

    }).save()
    res.status(201).json(postSave);
}


const addPost = async (req , res)=>{
    
    const {course , name  , date ,  coverImg , personImg  , title , post } = req.body;
    const newPost = {
        name: name,
        date:date,
        coverImg:coverImg,
        personImg:personImg,
        title :title,
        post:post,
    }

    College.findOneAndUpdate({
        coursename:course
    },{
        $push:{
            post:newPost
        } 

    }).then(posts=>{
        res.status(200).json(posts)
})
}









//    const newpost =  {
//         title:"BERNOULI THEOREM",
//         name:"GAUTAM SAHA",
//         post:"**A lush Green Campus located on National Highway 66 by the shores of the Arabian Sea**. Yes,you guessed it right! We have a private beach!!(with a lighthouse!). NITK has truly been my **Home away from home**.You bid a teary good bye to your parents on the day of your orientation and then the next four years just whizz by.The loud 7.40 am siren tells you that it’s morning and that you have to be in your 7.55 am class in about fifteen minutes. For some others it's the time to get up and sleep again ,only to wake up ten minutes later and rush to the class.You will walk back from your classes enjoying the bright sunny afternoon only to realize that it is suddenly raining cats and dogs. Well this happens only from July to mid Jan. For the rest of the year it is boiling, searing, that you could fry an egg on the pavement ."
//     }

//     College.findOneAndUpdate({
//         coursename:"AM200"
//     },{
//         $push:{
//             post: newpost
                
            
//         }
//     }).then(posts=>{
//         res.status(200).json(posts)
//     })

