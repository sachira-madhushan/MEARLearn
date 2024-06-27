import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from 'dotenv';
import userModel from "../models/userModel.js";

env.config();

//@des register user
//@route POST /api/user/register
//@access public
export const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    const exist=await User.findOne({email});
    if(exist){
        res.status(400);
        throw new Error('User Already Exist!');
    }

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const newUser=await User.create({
        name:name,
        email:email,
        password:hashedPassword,
        
    },{timestamps:true});
    res.json({name:newUser.name,email:newUser.email,token:generateToken(newUser.id)}).status(200);
}

//@des Authenticate a user
//@route POST /api/user/login
//@access public
export const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && await bcrypt.compare(password,user.password)){
        res.json({name:user.name,email:user.email,token:generateToken(user.id)});
    }else{
        //res.send("Login Failed").status(400);
    }
    
}
//@des get a user
//@route GET /api/user/getUser
//@access Private
export const getUser=async(req,res)=>{
    const userId = req.user.id
    const user =await User.findById(userId).select('-password');
    res.status(200).json({data: user}) 
}

//generate JWT token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}