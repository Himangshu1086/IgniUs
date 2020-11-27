import Post from '../../Models/Post'
import initDB from '../../HELPERS/initDB'
initDB()

export default async (req , res)=>{

    const {pid}= req.query;
    const pro = await Post.findOne({ _id :pid});
    res.status(200).json(pro);
}
