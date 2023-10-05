import React from "react";
import { products } from "../dummyData";
import { addToCart } from "../store/features/cartSlice";
import { useAppDispatch } from "../store/store";

const Products = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="rounded border shadow flex gap-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded border transition cursor-pointer flex flex-col justify-center items-center "
        >
          <img src="/vite.svg" alt="" className="w-24" />
          <p className="">{product.name}</p>
          <p className="">{product.price} $</p>
          <button
            className="rounded text-white cursor-pointer py-2 px-4 bg-success border-0"
            onClick={() => dispatch(addToCart({ product, qty: 1 }))}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
