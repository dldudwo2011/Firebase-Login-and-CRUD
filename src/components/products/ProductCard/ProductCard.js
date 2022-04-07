import React from "react";

function ProductCard({ children, product, ...props }) {
  const { image, key, numberOfColours, price, status, title, type } = {
    ...product,
  };

  const cardWidth = {
    width: "18rem",
  };

  return (
    <div className="card mx-3 my-3" style={cardWidth}>
      <img className="card-img-top" src={image} alt="foot-ball" />
      <div className="card-body top">
        <p className="card-text text-info">{status}</p>
        <p></p>
        <h5 className="card-title">{title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{type}</li>
        <li className="list-group-item">{numberOfColours}</li>
        <li className="list-group-item">{price}</li>
      </ul>
      <div className="card-body d-flex justify-content-evenly buttons">
        <button className="btn btn-primary" id="edit" data-key={key}>
          edit
        </button>
        <button className="btn btn btn-danger" id="delete" data-key={key}>
          delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
