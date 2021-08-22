import initDB from '../../HELPERS/initDB'
import User from '../../Models/User'
import jwt from 'jsonwebtoken'

initDB();

export default async (req, res)=>{
    


          try{  
                  const userTokens = req.cookies.token;
                  const user =  jwt.verify(userTokens , process.env.JWT_SECRET);
              
                  if(!user){
                      return res.status(404).json({error:"user does not exist"})
                  }
  
                  const VerifyUser = await User.findById({_id:user._id});
                  res.status(200).json(VerifyUser);
  
              }
              catch(err){
                  res.status(401).send("Unauthorised");
                  console.log(err);
              }
    
    }
