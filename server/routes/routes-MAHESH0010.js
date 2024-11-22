import express from "express";
import { addUser } from "../controller/userController.js";

const router = express.Router();

router.post("/add", addUser); // Route to add a user

export default router;
