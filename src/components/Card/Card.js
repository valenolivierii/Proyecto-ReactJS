import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { id, img, title, price } = props;
  return (
    <Link className={"cardLink"} to={`/item/${id}`}>
      <div className="card cardDiv">
        <img src={img} className="card-img-top imgCard" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">U$D {price}</p>
          <button type="button" className="btn btn-dark">Ver Detalle</button>
        </div>
      </div>
    </Link>
  );
};

export default Card;