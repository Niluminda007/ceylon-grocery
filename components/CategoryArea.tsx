"use client";

import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { CategoryType } from "@/types/categoryType";
import Loader from "./Loader";

const CategoryArea = () => {
  const [categories, setCategories] = useState<Array<CategoryType> | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/fetch-products")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setCategories(data.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full flex sm:flex-row items-center sm:items-unset flex-col justify-center gap-8 bg-transparent sm:py-0 py-16">
      {isLoading ? (
        <Loader />
      ) : (
        categories.map(({ category, products }, index) => (
          <CategoryCard key={index} name={category} products={products} />
        ))
      )}
    </div>
  );
};

export default CategoryArea;
