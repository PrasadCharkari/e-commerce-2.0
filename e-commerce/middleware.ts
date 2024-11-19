import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// This middleware checks for a JWT token and restricts access if unauthorized
export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // If there's no token, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Optionally, decode and verify the token (requires JWT_SECRET in the environment)
  try {
    const secret = process.env.JWT_SECRET;
    if (secret) {
      const decoded = jwt.verify(token, secret);

      // Check role if required (like admin)
      if (decoded && (decoded as any).role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect non-admins to home
      }
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/auth", req.url)); // Redirect if token is invalid
  }

  return NextResponse.next(); // Allow request if authorized
}

// Apply this middleware only to admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
