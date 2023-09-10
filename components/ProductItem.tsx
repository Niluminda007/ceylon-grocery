import React from "react";
type ProductItemProps = {
  name: string;
  price: number;
  weight: string;
  availability: boolean;
};

const ProductItem = ({
  name,
  price,
  weight,
  availability,
}: ProductItemProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={`${
          !availability ? "line-through opacity-40" : ""
        } w-full flex gap-2 text-sm text-black`}>
        <span className="min-w-[60%] flex justify-start text-sm">{name}</span>
        <span className="min-w-[20%] flex justify-start text-sm">{weight}</span>
        <span className="min-w-[20%] flex justify-start text-sm">{`€ ${price}`}</span>
      </div>
      {!availability && (
        <span className="text-red-600 text-sm"> Out Of Stock</span>
      )}
    </div>
  );
};

export default ProductItem;
