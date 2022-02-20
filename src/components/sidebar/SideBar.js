import React from "react";

import { Link } from "react-router-dom";

import { MdOutlineSpaceDashboard, MdOutlineMoneyOff } from "react-icons/md";

import { RiPagesLine } from "react-icons/ri";

import { SiIconify } from "react-icons/si";

import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";

import { BsPeople, BsHandThumbsUp } from "react-icons/bs";

import { IoIosPeople } from "react-icons/io";

import { BiCategoryAlt, BiLogIn } from "react-icons/bi";

import { FiPackage } from "react-icons/fi";

function SideBar(props) {
  function clickHandler(e) {
    e.preventDefault();
    e.currentTarget.nextSibling.classList.toggle("d-block");
    e.currentTarget.nextSibling.setAttribute(
      "style",
      "position: absolute; inset: auto auto 0px 0px;margin: 0px; transform: translate(40px, -40px);"
    );
  }

  const styleObj = {
    width: "17.5rem",
  };

  const styleObj2 = {
    width: "15.5rem",
    marginBottom: "11rem",
  };
  return (
    <div
      style={styleObj}
      className="d-flex flex-column flex-shrink-0 p-3 bg-light position-fixed vh-100"
    >
      <ul style={styleObj2} className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link
            to="/dashboard"
            className="d-flex align-items-center nav-link active"
            aria-current="page"
          >
            <MdOutlineSpaceDashboard className="me-3" />
            DASHBOARD
          </Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <BsPeople className="me-3" />
            VENDORS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <IoIosPeople className="me-3" />
            USERS
          </Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <BiCategoryAlt className="me-3" />
            CATEGORIES
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/dashboard/product"
            className="d-flex align-items-center nav-link link-dark"
          >
            <FiPackage className="me-3" />
            PRODUCTS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <AiOutlineShoppingCart className="me-3" />
            ORDERS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <AiOutlineStar className="me-3" />
            REVIEWS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <BsHandThumbsUp className="me-3" />
            Best-sellers
          </Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link to="/" className="d-flex align-items-center nav-link link-dark">
            <BiLogIn className="me-3" />
            AUTHENTICATION
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <SiIconify className="me-3" />
            ICONS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <RiPagesLine className="me-3" />
            OTHER PAGES
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="d-flex align-items-center nav-link link-dark">
            <MdOutlineMoneyOff className="me-3" />
            ON-SALES
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          onClick={clickHandler}
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://avatars.dicebear.com/api/adventurer/youngjae%20lee.svg"
            alt="profile-img"
            width="48"
            height="48"
            className="rounded-circle me-2"
          />
          <strong>Youngjae Lee</strong>
        </Link>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <Link className="dropdown-item" to="#">
              New project...
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
