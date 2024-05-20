
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js"; // Ensure the .js extension
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    });

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get('/', (req, res) => {
    res.send('Hello shohidul islam!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
