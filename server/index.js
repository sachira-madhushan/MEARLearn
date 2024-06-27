import express from 'express';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/database.js';

const app=express();
app.use(express.json());
connectDB();

//POST API
app.use("/api/post",postRoutes);
//USER API
app.use("/api/user",userRoutes);


app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});