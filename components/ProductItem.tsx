import React from "react";
type ProductItemProps = {
  name: string;
  price: number;
  weight: string;
};

const ProductItem = ({ name, price, weight }: ProductItemProps) => {
  return (
    <div className="w-full flex gap-2 text-sm text-black">
      <span className="min-w-[60%] flex justify-start text-sm">{name}</span>
      <span className="min-w-[20%] flex justify-start text-sm">{weight}</span>
      <span className="min-w-[20%] flex justify-start text-sm">{`€ ${price}`}</span>
    </div>
  );
};

export default ProductItem;
