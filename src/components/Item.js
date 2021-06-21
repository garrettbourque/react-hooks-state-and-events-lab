import React,{useState} from "react";

function Item({ name, category }) {
  const [carted,setCarted] = useState(false);

  const addToCart=()=>{
    setCarted(!carted)
  }
  return (
    <li className= {(carted ? "" : "in-cart")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
