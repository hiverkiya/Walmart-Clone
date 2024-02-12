"use client";
import { Product } from "@/typings/productTypings";
import React from "react";
import { useCartStore } from "@/store";
import { Button } from "./ui/button";
function RemoveFromCart({ product }: { product: Product }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <Button className="bg-walmart hover:bg-walmart/50" onClick={handleRemove}>
      -
    </Button>
  );
}

export default RemoveFromCart;
