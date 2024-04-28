import jwt from 'jsonwebtoken';
import User from './../models/userModel.js';
import env from 'dotenv';

env.config();
const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from header
            token=req.headers.authorization.split(' ')[1];
            //verify the token
            let decoded
            jwt.verify(token,process.env.JWT_SECRET,(error,data)=>{
                if(data){
                    decoded=data;
                }
                
            });

            req.user=await User.findById(decoded.id).select('-password')
            next();

            //get user from the token

        }catch(error){
            res.status(401);
            res.send("Unauthorized");
        }
    }else{
        res.status(401);
        res.send("Unauthorized");
    }

    
    
}

export default protect