import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import "./App.css";

const App = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=200&page=1&sparkline=false`
        )
        .then((res) => setCoin(res.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);
  console.log(coin);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
};

export default App;
