import express from 'express';
import { updatePost,singlePost ,allPosts,createPost,removePost} from '../controllers/postController.js';
//import protect from './../middlewares/authMiddleware.js';

const router=express.Router();
router.get("/",allPosts)
router.get("/:id",singlePost)
router.put("/update/:id",updatePost)
router.post("/",createPost)
router.delete("/delete/:id",removePost)

export default router;
