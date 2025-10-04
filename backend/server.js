import app from "./app.js";
import config from "./src/config/index.js";

import mongoose from "mongoose";

const PORT = config.src.port;
const DB_URI = config.db.uri;

async function startServer() {
    try {
        mongoose.connect(DB_URI);
        console.log("Connected to the database!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(`Cannot connect to the database ${error}`);
        process.exit();
    }
}

startServer();