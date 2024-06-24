import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import path from 'path';

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