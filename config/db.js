import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://btron:K5wRTfqbYeWCzDaF@cluster0.es3fh.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}