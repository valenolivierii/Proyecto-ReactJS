import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
     return (
    <div className="itemDetail">
    <div className="divImg">
    {item.img}
    </div>
    <div className="divTitle">
      <div>
        <h5>{item.title}</h5>
        <p className="price">U$D {item.price}</p>
      </div>
      <ItemCount />
    </div>
  </div>
  );
};

export default ItemDetail;
