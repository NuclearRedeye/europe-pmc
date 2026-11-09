import type { Express } from "express";
import express from "express";
import { authenticate } from "./middleware/auth.ts";
import { logRequest } from "./middleware/logger.ts";
import { createHelloRouter } from "./routes/hello.ts";

export function createApp(): Express {
  const app = express();

  app.use(logRequest);
  app.use(authenticate);
  app.use("/", createHelloRouter());

  return app;
}
