import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({
  item: { id, img, title, price, stock },
}) => {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-4 my-4">
      <div className="card">
        <img
          src={img}
          className="card-img-top"
          style={{ height: "300px" }}
          alt={title}
        />
        </div>
        <div className="card-body">
          <h6 className="card-title fs-4 text-center text-uppercase">
            {title}
          </h6>
          <div className="row my-2 border d-flex aling-items-center">
            <div className="col col-10">
              <p className="fs-5 m-0 p-0 text-uppercase">Disponible</p>
            </div>
            <div className="col col-2">
              <span className="ml-3 fs-5 col col-6">{stock}</span>
            </div>
          </div>
          <div className="row my-2 border d-flex aling-items-center">
            <div className="col col-8">
              <p className="fs-5 m-0 p-0 text-uppercase">precio</p>
            </div>
            <div className="col col-4">
              <span className="ml-3 fs-6 col col-6 text-right">
                U$D {price}
              </span>
            </div>
          </div>
          <Link to={`/item-detail/${id}`} className="btn btn-dark w-100">
            Ver Detalle
          </Link>
        </div>
      </div>
  );
};

export default Item;
