import type { NextFunction, Request, Response } from "express";

export function logRequest(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  console.log(`${request.method} ${request.path}`);
  next();
}
