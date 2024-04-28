import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'

    },
    title:String,
    description:String,
},{timestamps:true})

export default mongoose.model("Post",userSchema)