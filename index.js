import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"; // Ensure the .js extension

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;



mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    });

app.use("/book", bookRoute);

app.get('/', (req, res) => {
    res.send('Hello shohidul islam!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
