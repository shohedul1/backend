import express from "express";
import { getBook } from "../controller/book.controller.js"; // Ensure the correct path

const router = express.Router();

router.get("/", getBook);

export default router;
