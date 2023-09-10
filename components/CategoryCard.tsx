import { ProductType } from "@/types/productTypes";
import React from "react";
import ProductItem from "./ProductItem";
type CategoryCardProps = {
  name: string;
  products: ProductType[] | [];
};

const CategoryCard = ({ name, products }: CategoryCardProps) => {
  return (
    <div className="sm:w-[400px] w-[80%] sm:h-[600px] h-auto bg-white py-4 flex flex-col items-center rounded-xl sm:rounded-3xl gap-4">
      <h2 className=" max-w-[100%] h-[40px] text-[#5BFB23] text-[1.5rem] font-normal  rounded-2xl p-5 bg-black flex items-center justify-center">
        {name}
      </h2>
      {products.length > 0 && (
        <div className="w-full flex flex-col gap-4 px-4">
          {products.map(({ name, price, weight, inStock }, index) => (
            <ProductItem
              key={index}
              name={name}
              price={price}
              weight={weight}
              availability={inStock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
