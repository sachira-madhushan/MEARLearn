import express from 'express';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/database.js';

const app=express();
app.use(express.json());

app.use("/api/post",postRoutes);
app.use("/api/user",userRoutes);


connectDB();

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});