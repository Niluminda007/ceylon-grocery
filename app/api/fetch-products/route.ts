import { NextResponse } from "next/server";
import Product from "@/models/prodcut";
import { connectToDB } from "@/utils/database";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const categories = ["Spices", "Biscuits", "Other Products"];
    await connectToDB();
    const products = [];
    for (const category of categories) {
      const productsByCategory = await Product.find({ category: category });
      products.push({ category: category, products: productsByCategory });
    }

    return NextResponse.json({
      message: "Products fetched successfully.",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products from the database:", error);
    return NextResponse.error;
  }
}
