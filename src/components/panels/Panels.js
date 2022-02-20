import React from "react";

import { Link } from "react-router-dom";

import { AiOutlineRight } from "react-icons/ai";

function Panels(props) {
  const styleObj = {
    height: "calc(100vh - 5rem)",
    marginLeft: "17.5rem",
  };

  const cardWidth = {
    width: "18rem",
  };

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
          <div className="card mx-3 my-3" style={cardWidth}>
            <img
              className="card-img-top"
              src="../../static/images/mercurial-superfly-8-elite-fg-football-boots-jZbl4T(1).jpg"
              alt="foot-ball"
            />
            <div className="card-body top">
              <p className="card-text text-info">Just In</p>
              <p></p>
              <h5 className="card-title">Nike Mercurial Superfly 8 Elite FG</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Firm-Ground Footbal Boot</li>
              <li className="list-group-item">1 Colour</li>
              <li className="list-group-item">$365</li>
            </ul>
            <div className="card-body d-flex justify-content-evenly buttons">
              <button
                className="btn btn-primary"
                id="edit"
                data-key="-MtmsoSQ8VxmAT1U7qX3"
              >
                edit
              </button>
              <button
                className="btn btn btn-danger"
                id="delete"
                data-key="-MtmsoSQ8VxmAT1U7qX3"
              >
                delete
              </button>
            </div>
          </div>
          <div className="card mx-3 my-3" style={cardWidth}>
            <img
              className="card-img-top"
              src="../../static/images/mercurial-vapor-14-elite-fg-football-boots-gSCd8q(2).jpg"
              alt="foot-ball"
            />
            <div className="card-body top">
              <p className="card-text text-info">Just In</p>
              <p></p>
              <h5 className="card-title">Nike Mercurial Vapor 14 Elite FG</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Firm-Ground Footbal Boot</li>
              <li className="list-group-item">1 Colour</li>
              <li className="list-group-item">$330</li>
            </ul>
            <div className="card-body d-flex justify-content-evenly buttons">
              <button
                className="btn btn-primary"
                id="edit"
                data-key="-MtmsoSSII8tLeLPC7Jp"
              >
                edit
              </button>
              <button
                className="btn btn btn-danger"
                id="delete"
                data-key="-MtmsoSSII8tLeLPC7Jp"
              >
                delete
              </button>
            </div>
          </div>
          <div className="card mx-3 my-3" style={cardWidth}>
            <img
              className="card-img-top"
              src="../../static/images/mercurial-vapor-14-elite-sg-pro-anti-clog-traction-football-boots-WCZ2Sz(4).jpg"
              alt="foot-ball"
            />
            <div className="card-body top">
              <p className="card-text text-info">Just In</p>
              <p></p>
              <h5 className="card-title">
                Nike Mercurial Vapor 14 Elite SG-PRO Anti-Clog Traction
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Soft-Ground Football Boots</li>
              <li className="list-group-item">1 Colour</li>
              <li className="list-group-item">$340</li>
            </ul>
            <div className="card-body d-flex justify-content-evenly buttons">
              <button
                className="btn btn-primary"
                id="edit"
                data-key="-MtmsoSUULS-DbJy2cx0"
              >
                edit
              </button>
              <button
                className="btn btn btn-danger"
                id="delete"
                data-key="-MtmsoSUULS-DbJy2cx0"
              >
                delete
              </button>
            </div>
          </div>
          <div className="card mx-3 my-3" style={cardWidth}>
            <img
              className="card-img-top"
              src="../../static/images/mercurial-vapor-14-elite-ag-artificial-ground-football-boots-nrsh5s.jpg"
              alt="foot-ball"
            />
            <div className="card-body top">
              <p className="card-text text-info">Just In</p>
              <p></p>
              <h5 className="card-title">Nike Mercurial Vapor 14 Elite AG</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Artificial-Ground Football Boot
              </li>
              <li className="list-group-item">1 Colour</li>
              <li className="list-group-item">$330</li>
            </ul>
            <div className="card-body d-flex justify-content-evenly buttons">
              <button
                className="btn btn-primary"
                id="edit"
                data-key="-MtmsoSW4vJcRpQUY7GW"
              >
                edit
              </button>
              <button
                className="btn btn btn-danger"
                id="delete"
                data-key="-MtmsoSW4vJcRpQUY7GW"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panels;
