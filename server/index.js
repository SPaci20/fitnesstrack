import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hello Team SPaci Dax",
    });
});

const startServer = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        app.listen(8080, () => {
            console.log("Server is running on port 8080");
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();
