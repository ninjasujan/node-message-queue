import Redis from "ioredis";
import Locals from "./Locals.js";

class RedisIO {
  static client;
  static init() {
    RedisIO.client = new Redis({
      host: Locals.config().REDIS_SERVER,
      port: Locals.config().REDIS_PORT,
      password: Locals.config().REDIS_PASSORD,
    });
    RedisIO.client.monitor((error, monitor) => {
      if (error) {
        console.info("[REDDIS_ERROR]: ", error);
      }
      console.log("[REDIS INSTANCE RUNNING]");
    });
  }

  static getRedisClient = () => {
    return RedisIO.client;
  };
}

export default RedisIO;
