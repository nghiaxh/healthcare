import ApiError from "./src/api-error.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Health Care application" });
});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
});

export default app;