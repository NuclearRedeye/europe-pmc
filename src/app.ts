import type { Express } from "express";
import express from "express";

export function createApp(): Express {
  const app = express();

  app.use((_req, res) => {
    res.send("Hello World");
  });

  return app;
}
