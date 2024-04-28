import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    
    title:String,
    description:String,
},{timestamps:true})

export default mongoose.model("Post",userSchema)