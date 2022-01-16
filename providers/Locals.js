import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join("..", ".env") });

class Locals {
  static config = () => {
    return {
      SERVER_PORT: process.env.SERVER_PORT || 5000,
      REDIS_SERVER: process.env.REDIS_SERVER,
      REDIS_PORT: process.env.REDIS_PORT,
      REDIS_PASSORD: process.env.REDIS_PASSORD,
    };
  };
}

export default Locals;
