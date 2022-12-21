import React from "react";
import { useParams } from "react-router-dom";
import products from "../../productos.json";
import "./ItemDetailContainer.css";
import Counter from "../Counter/Counter";

const ItemDetailContainer = () => {
  const { id } = useParams()

  const [{ img, title, price }] = products.cards.filter(
    (item) => item.id === id
  )
  return (
    <div className="itemDetail">
      <div className="divImg">
        <img src={img} alt="" />
      </div>
      <div className="divTitle">
        <div>
          <h5>{title}</h5>
          <p className="price">U$D {price}</p>
        </div>
        <Counter />
        <button type="button" className="btnComprar">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
