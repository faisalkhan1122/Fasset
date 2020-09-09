import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <h2 className="logo">Fasset Marketplace</h2>
      </Link>
      <div className="options">
        <button type="button" className="btn btn-primary mybtn linkedin">
          LinkedIn
        </button>
        <button type="button" className="btn btn-primary  mybtn facebook">
          Facebook
        </button>
        <button type="button" className="btn btn-primary mybtn">
          Website
        </button>
      </div>
    </div>
  );
};

export default Header;
