import { NextResponse } from "next/server";
import { products } from "@/constants/products";
import Product from "@/models/prodcut";
import { connectToDB } from "@/utils/database";

export async function GET() {
  try {
    await connectToDB();

    for (const product of products) {
      await Product.create({
        name: product.name,
        price: product.price,
        category: product.category,
        weight: product.weight,
      });
    }

    return NextResponse.json({ message: "Products added successfully." });
  } catch (error) {
    console.error("Error adding products to the database:", error);
    return NextResponse.error;
  }
}
