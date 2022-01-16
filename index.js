import express from "express";
import Locals from "./providers/Locals.js";
import Redis from "./providers/Redis.js";
const app = express();
import route from "./routes/queue.route.js";
import Queue from "./jobs/http.queue.js";

// Middleware - to keep count of request hit
app.use((request, response, next) => {
    Queue.apiQueue.add({ count: 1 });
    next();
});

// Setup Routes
app.use("/api", route);

// Load Redis Instance
Redis.init();

app.listen(Locals.config().SERVER_PORT, () => {
    console.info("[SERVER RUNNING]", Locals.config().SERVER_PORT);
});
