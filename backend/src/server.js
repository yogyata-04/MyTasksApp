import express from "express"; // to use this we need to add "type":"module" in package.json else we will get error 
import notesRoutes from "./routes/notesRoutes.js"
import cors from "cors";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv"; //used to load environment variables from a .env file into your application at runtime
import rateLimiter from "./middleware/rateLimiter.js";

// const express=require("express")
dotenv.config();

const app=express();
const PORT= process.env.PORT || 8080;

console.log(process.env.MONGODB_URI)


// middleware to access request body
app.use(cors({
    origin: "http://localhost:5173",
}));
//app.use(express.json()) parses incoming JSON request bodies and makes the data available on req.body for your routes.
app.use(express.json());
// simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & req URL is ${req.url}`);
// });
app.use(rateLimiter);

//adding base endpoints (router)
app.use("/api/notes", notesRoutes);

// What is an endpoint?
// Combination of URL + HTTP method that lets client interact with specific resource

// app.get("/api/notes",(req,res)=>{
//     res.status(200).send("You got n notes.");
// });

// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message:"post created successfully"});
// });

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"post updated successfully"});
// });

// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({msg:"post deleted successfully"});
// });

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started at PORT: ", PORT);
    })
});