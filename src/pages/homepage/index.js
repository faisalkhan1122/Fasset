import React from "react";
import "./index.scss";
import Currencies from "../../components/currencies/currencies";
import { withRouter } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="title">
        Top 100 Cryptocurrencies by Market Capitalization
      </h1>
      <Currencies />
    </div>
  );
};

export default withRouter(Homepage);
