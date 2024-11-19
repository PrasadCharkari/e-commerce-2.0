import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import jwt from "jsonwebtoken";

const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_LOGIN,
  password: process.env.ADMIN_PASSWORD,
};

export async function POST(request: Request) {
  await dbConnect();
  const { username, password } = await request.json();

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const token = jwt.sign({ username, role: "admin" }, secret, {
      expiresIn: "1h",
    });
    return NextResponse.json({ token, role: "admin" });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
