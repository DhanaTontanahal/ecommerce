import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);
  const handleAdd = () => {
    // console.log(item);
    addToBasket(item);
  };

  return (
    <div className="mx-auto px-8 border border-gray-200 rounded-lg">
      <img width="400" src={item.image} alt={item.name} />
      <div className="flex flex-row items-center justify-between py-4">
        <div>
          <p className="text-xl">{item.name}</p>
          <p className="text-lg">${item.price}</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-indigo-500 text-white text-lg font-medium rounded-full p-4"
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default Product;
