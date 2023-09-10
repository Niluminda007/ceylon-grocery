import type { NextApiRequest, NextApiResponse } from "next";
import Product from "@/models/prodcut";
import { connectToDB } from "@/utils/database";

type ResponseData = {
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "PUT") {
    try {
      await connectToDB();

      const { id, inStock } = req.body;

      if (!id || inStock === undefined) {
        return res.status(400).send({ message: "Invalid request data" });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { inStock },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).send({ message: "Product not found" });
      }
      return res.json({
        message: "Product updated successfully.",
        data: updatedProduct,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      return;
    }
  } else {
    return res.status(405).json({ message: "method not allowed" });
  }
}
