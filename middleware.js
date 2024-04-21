import { NextResponse } from "next/server";

/**
 * Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.
 *
 * @param {import('next/server').NextRequest} request
 *
 * @returns {import('next/server').NextResponse | void}
 */
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/middleware-test"))
    return NextResponse.json({ message: "Middleware works!" });
}
