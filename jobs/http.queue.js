import Queue from "bull";
import RedisIO from "../providers/Redis.js";

class ApiQueue {
    static apiCount = 0;

    constructor() {
        this.queueName = "API_QUEUE";
        this.apiQueue = new Queue(this.queueName, RedisIO.getRedisClient);
        this.mountWorker();
    }

    mountWorker = () => {
        this.apiQueue.process(async (job, done) => {
            setTimeout(() => {
                const { count } = job.data;
                ApiQueue.apiCount = ApiQueue.apiCount + count;
                console.log("[JOB PROCESSING DONE]", ApiQueue.apiCount);
                done(null, ApiQueue.apiCount);
                // throw error if any
                // done(new Error("error occured"));
            }, 3000);
        });

        this.apiQueue.on("completed", (job, result) => {
            console.log("[JOB COMPLETED]", result);
        });

        this.apiQueue.on("failed", (error) => {
            console.log("[JOB FAILED]", error);
        });
    };
}

export default new ApiQueue();
