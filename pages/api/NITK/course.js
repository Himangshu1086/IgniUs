
import initDB from '../../../HELPERS/initDB'
import Course from '../../../Models/course'
initDB()

export default async (req , res )=>{

    switch(req.method)
    {
        case "GET" :
             await allCourse(req,res);
            break;
        case "PUT":
            await addCourse(req , res);
            break;
    }
    
}


const allCourse = async (req ,res)=>{

    Course.find().then(posts=>{
        res.status(200).json(posts)
    })
   
}


const addCourse = async (req , res)=>{
    
    const {year , course} = req.body;
    const newCourse = {
        coursename : course
    }

    Course.findOneAndUpdate({
        yearname:year
    },{
        $push:{
            course:newCourse
        } 

    }).then(posts=>{
        res.status(200).json(posts)
})
}