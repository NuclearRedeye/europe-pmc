import type { NextFunction, Request, Response } from "express";

export function authenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // TODO: implement auth; allows every request for now
  next();
}
