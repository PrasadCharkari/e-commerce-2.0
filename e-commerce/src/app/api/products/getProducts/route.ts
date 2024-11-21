// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";
// import Product from "@/models/Product";

// export async function GET(request: Request) {
//   await dbConnect();

//   try {
//     const products = await Product.find({});
//     return NextResponse.json(products, { status: 200 });
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return NextResponse.json(
//       { message: "Failed to fetch products", error },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(request: Request) {
  await dbConnect();

  try {
    const products = await Product.find({});
    return NextResponse.json(products, {
      status: 200,
      headers: {
        "Cache-Control": "no-store", // Prevent caching
      },
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products", error },
      { status: 500 }
    );
  }
}
