import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})

export default mongoose.model('User',userSchema);