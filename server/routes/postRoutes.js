import express from 'express';
import { updatePost,singlePost ,allPosts,createPost,removePost} from '../controllers/postController.js';
import protect from './../middlewares/authMiddleware.js';

const router=express.Router();
router.get("/",protect,allPosts)
router.get("/:id",protect,singlePost)
router.put("/update/:id",protect,updatePost)
router.post("/",protect,createPost)
router.delete("/delete/:id",protect,removePost)

export default router;
