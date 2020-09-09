import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./currencies.scss";
const Currencies = (props) => {
  let { history } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=c5f00595-ff5e-4f5d-a519-9e8cdd431c49";
    fetch(url)
      .then((res) => res.json())
      .then(
        (json) => {
          setData(json.data);
          setLoading(false);
        }
        // console.log(json.data)
      );
  }, []);

  return (
    <div className="currencies">
      {!loading ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Price</th>
              <th scope="col">Volumn</th>
              <th scope="col">Circulating Supply</th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length !== 0 &&
              data.map((single, index) => (
                <tr key={index}>
                  <th scope="row"> {single.cmc_rank}</th>
                  <td
                    className="name"
                    onClick={() => {
                      history.push("/currency/" + single.id);
                    }}
                  >
                    <Link to="/currency" className="">
                      {single.name}
                    </Link>
                  </td>
                  <td className="market">
                    <span>$</span>
                    {" $ " + single.quote &&
                      single.quote.USD &&
                      single.quote.USD.market_cap.toLocaleString()}
                  </td>
                  <td className="sign">
                    {" "}
                    <span>$</span>{" "}
                    {" $ " + single.quote &&
                      single.quote.USD &&
                      single.quote.USD.price}
                  </td>
                  <td className="sign">
                    {" "}
                    <span>$</span>
                    {single.quote &&
                      single.quote.USD &&
                      single.quote.USD.volume_24h.toLocaleString()}
                  </td>
                  <td className="circulating">
                    {single.circulating_supply.toLocaleString()} {single.symbol}
                  </td>
                  <td
                    className={
                      single.quote &&
                      single.quote.USD &&
                      single.quote.USD.percent_change_24h > 1
                        ? "change"
                        : "text-danger"
                    }
                  >
                    {single.quote &&
                      single.quote.USD &&
                      single.quote.USD.percent_change_24h}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="h-50 pt-5 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Currencies);
