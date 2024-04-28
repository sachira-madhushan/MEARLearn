import Post from "../models/postModel.js";

export const allPosts=async(req,res)=>{
    const allPosts=await Post.find({user:req.user.id});
    res.send(allPosts);
}

export const singlePost=async(req,res)=>{
    const post=await Post.findById(req.params.id);
    res.send(post);
}

export const createPost=async (req,res)=>{
    const response=req.body;
    const newPost=await Post.create(response);
    res.send(newPost);
}

export const updatePost=async (req,res)=>{
    const post=req.body;
    const id=req.params.id;

    const updatedPost=await Post.findByIdAndUpdate(id,post,{new:true});
    res.send(updatedPost);
}

export const removePost=async(req,res)=>{
    const deleteUser=await Post.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
}