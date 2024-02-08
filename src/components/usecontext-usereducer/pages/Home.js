import React from "react";
import Navbar from "./Navbar";
import { storeData } from "../data/Data";
import Product from "./Product";
function Home() {
  return (
    <>
      <Navbar />

      <h2 className="text-4xl tracking-wide py-4 pl-8">New In</h2>
      <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 px-8">
        {storeData.map((eachProduct, i) => {
          return (
            <div>
              <Product key={i} item={eachProduct} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
