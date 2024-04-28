import mongoose from 'mongoose';

const connectDB=()=>{
    mongoose.connect("mongodb+srv://Administrator:admin123@cluster0.e70gfsy.mongodb.net/MERNLEARN?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{console.log("Database Connected")})
    .catch((err)=>{console.log(err)})
}

export default connectDB