import { createApp } from "./app.ts";

const port = Number(process.env.PORT) || 8080;

const server = createApp().listen(port, () => {
  console.log(`Listening on port ${port}`);
});

process.on("SIGTERM", () => {
  console.log("Terminating...");
  server.close(() => {
    console.log("Server closed");
  });
});
