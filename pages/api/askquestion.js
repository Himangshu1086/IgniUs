import initDB from '../../HELPERS/initDB'
import Question from '../../Models/AskQuestion'
initDB()



export default async (req , res )=>{

    switch(req.method)
    {
        case "GET" :
             await allQuestion(req,res);
            break;
        case "POST":
             await questionPost(req , res);
             break;
        case "DELETE":
             await deleteQuestion(req , res);
             break;
    }

   
}



const allQuestion = async (req ,res)=>{

    Question.find().then(posts=>{
        res.status(200).json(posts)
    })
}



const questionPost = async (req , res) =>{
    const {userName ,Email , Questions} = req.body;
    const postSave = await new Question({
        userName ,Email , Questions
    }).save()
    res.status(201).json(postSave);
}


const deleteQuestion = async (req , res )=>{
    const {pid} = req.body;
    await Question.findByIdAndDelete({_id:pid});
    res.status(200).json({});
}
