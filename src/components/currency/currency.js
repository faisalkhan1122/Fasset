import "./currency.scss";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
const Currency = (props) => {
  let { match } = props;
  let ids = match.params && match.params.id ? match.params.id : "";

  const [currency, setCurrency] = useState({});

  useEffect(() => {
    let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ids}&CMC_PRO_API_KEY=c5f00595-ff5e-4f5d-a519-9e8cdd431c49`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
       
        setCurrency(json.data);
        
      });
  }, []);

  
  // LOGO, Name ,symbol , Slug and Description are needed to fetch from API and use

  return (
    <div className="homepage">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 d-flex flex-row mt-5">
            <img src={currency && currency[ids] && currency[ids].logo} alt="LOGO" />

            <h1 className=" Heading mt-2 ml-3">
              {currency && currency[ids] && currency[ids].name}
            </h1>
            <span className="mt-2">
              {currency && currency[ids] && currency[ids].symbol}
            </span>
          </div>
          <div className="col-md-8 col-lg-8 ">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Market Cap</th>
                  <th scope="col">Volumn</th>
                  <th scope="col">Circulating Supply</th>
                  <th scope="col">Max Supple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="Heading mt-4">
            {currency && currency[ids] && currency[ids].name}
          </h1>

          <p className="description">
            {currency && currency[ids] && currency[ids].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Currency);
