import { Router } from "express";
import { helloWorld } from "../controllers/hello.ts";

export function createHelloRouter(): Router {
  const router = Router();

  router.use(helloWorld);

  return router;
}
