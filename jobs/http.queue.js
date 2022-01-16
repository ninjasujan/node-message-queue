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
        console.log("[JOB PROCESSING DONE]");
        done();
      }, 3000);
    });
  };
}

export default new ApiQueue();
