import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  // Set the cookie in the response
  response.cookies.set({
    name: "rivCookie",
    value: "rivexa",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use Secure only in production
    sameSite: "strict",
    path: "/",
  });

  return response;
}

export const config = {
  matcher: "/:path*", // Apply to all paths
};
