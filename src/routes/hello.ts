import { Router } from "express";

export function createHelloRouter(): Router {
  const router = Router();

  router.use((request, response) => {
    response.send("Hello World");
  });

  return router;
}
