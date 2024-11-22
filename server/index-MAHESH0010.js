import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import Routes from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", Routes);

connection(); // Connect to the database

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));
