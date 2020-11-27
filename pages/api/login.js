import initDB from '../../HELPERS/initDB'
import User from '../../Models/User'
import jwt from 'jsonwebtoken'

initDB();

export default async (req, res)=>{

    const {username , Email , password} = req.body;
    const user = await User.findOne({username});

    if(!user){
        return res.status(404).json({error:"user does not exist"})
    }

    
    if(password === user.password){

       const token =  jwt.sign({userId:user._id}, process.env.JWT_SECRET)
       res.status(201).json({token})
    }
    else{
       return res.status(401).json({error:"Email or Password don't match"})
    }
}