import React, { useContext } from "react";
import Navbar from "./Navbar";
import { StoreContext } from "../context/StoreContext";
import BasketProduct from "../pages/BasketProduct";
import ErrorBoundary from "./ErrorBoundary";

function Basket() {
  const { products, total } = useContext(StoreContext);

  if (products.length === 0) {
    throw new Error("No items found!");
  }

  return (
    <ErrorBoundary>
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3>Your Basket</h3>
        <p>Total: $ {total}</p>
      </div>

      <div>
        {products?.map((ec) => {
          return <BasketProduct product={ec} />;
        })}
      </div>
    </ErrorBoundary>
  );
}

export default Basket;
