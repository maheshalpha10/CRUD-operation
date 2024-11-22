import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";



const app = express();
dotenv.config();

const PORT = 8000;
connection();

app.listen(PORT,()=> console.log(`server is rummin successfully on port ${PORT}`));