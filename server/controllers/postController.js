import Post from "../models/postModel.js";

//@des get all posts
//@route GET /api/post/
//@access Public
export const allPosts=async(req,res)=>{
    const allPosts=await Post.find({user:req.user.id});
    res.send(allPosts);
}

//@des get a post
//@route GET /api/post/{id}
//@access Public
export const singlePost=async(req,res)=>{
    const post=await Post.findById(req.params.id);
    res.send(post);
}


//@des create a post
//@route POST /api/post/
//@access Private
export const createPost=async (req,res)=>{
    const userId = req.user.id;
    const {description,title}=req.body;
    const newPost=await Post.create({
        user:userId,
        title:title,
        description:description
    });

    res.send(newPost);
}

//@des update a post
//@route PUT /api/post/update/{id}
//@access Private
export const updatePost=async (req,res)=>{
    const post=req.body;
    const id=req.params.id;
    const user=req.user;
    const postDB=await Post.findById(req.params.id);
    if(!user){
        res.status(401);
        throw new Error("Unauthorized");
    }

    const updatedPost=await Post.findByIdAndUpdate(id,post,{new:true});
    res.send(updatedPost);
}

//@des remove a post
//@route DELETE /api/post/delete/{id}
//@access Private
export const removePost=async(req,res)=>{
    const postDB=await Post.findById(req.params.id);

    const user=req.user;
    if(!user){
        res.status(401);
        throw new Error("Unauthorized");
    }
    
    const deleteUser=await Post.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
}