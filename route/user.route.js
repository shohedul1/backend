import express from "express";
import { signup,login } from "../controller/user.controller.js"; // Ensure the .js extension

const router = express.Router();

router.post("/signup", signup); // Use POST for signup
router.post("/login", login); // Use POST for signup


export default router;
