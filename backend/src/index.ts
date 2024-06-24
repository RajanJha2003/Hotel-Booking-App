import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import path from 'path';
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("Mongo Connected")
})

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
  
  app.listen(7000, () => {
    console.log("server running on localhost:7000");
  });
