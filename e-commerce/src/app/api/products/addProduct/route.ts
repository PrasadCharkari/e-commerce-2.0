import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const productData = await request.json();
    const newProduct = new Product(productData);
    await newProduct.save();
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Failed to add product:", error);
    return NextResponse.json(
      { message: "Failed to add product", error },
      { status: 500 }
    );
  }
}
