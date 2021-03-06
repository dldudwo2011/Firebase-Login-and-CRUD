import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useGetAllProducts } from "hooks/useGetAllProducts";
import { ProductCard } from "components/products/ProductCard";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Panels({ title, ...props }) {
  const navigator = useNavigate();

  const styleObj = {
    height: "calc(100vh - 5rem)",
    marginLeft: "17.5rem",
  };

  function onClickHandler() {
    navigator("add");
  }

  const [loading, setLoading] = useState(true);
  const productData = useGetAllProducts();
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <div className="container-fluid p-5" style={styleObj}>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Link to="/dashboard" className="me-3">
            Home
          </Link>
          <AiOutlineRight className="me-3" />
          <span className="font-weight-bold">Product</span>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ paddingLeft: 40, paddingRight: 40 }}
          onClick={onClickHandler}
        >
          Add Product
        </button>
      </div>
      <div>
        <h1 className="text-start my-3 font-weight-bold">Product Listings</h1>
        <div
          id="shoe-cards"
          className="container d-flex flex-wrap justify-content-center"
        >
          <ClipLoader color="red" loading={loading} css size={100} />
          {!loading
            ? productData.map((product) => (
                <ProductCard key={product.key} product={product} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Panels;
