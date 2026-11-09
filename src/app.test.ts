import assert from "node:assert/strict";
import { once } from "node:events";
import { after, test } from "node:test";
import { createApp } from "./app.ts";

const server = createApp().listen(0);
await once(server, "listening");
after(() => {
  server.close();
});

const address = server.address();
assert(address !== null && typeof address === "object");
const baseUrl = `http://127.0.0.1:${address.port}`;

test("returns hello world for any route", async () => {
  const res = await fetch(`${baseUrl}/`);

  assert.equal(res.status, 200);
  assert.equal(await res.text(), "Hello World");
});
