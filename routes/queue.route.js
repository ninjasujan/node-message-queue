import { Router } from "express";

const router = Router();

router.post("/push-notif", (request, response, next) => {
  console.log("[API EXECUTION DONE]");
  response.status(200).send("OK");
});

export default router;
