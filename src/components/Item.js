import React, {useState} from "react";

function Item({ name, category }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  function handleClickCart(){
    setIsAddedToCart((isAddedToCart) => !isAddedToCart)
  }

  return (
    <li className={isAddedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAddedToCart ? "remove" : "add"} onClick={handleClickCart}>{isAddedToCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
