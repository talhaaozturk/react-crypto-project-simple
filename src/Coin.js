import React from "react";
import "./Coin.css";
const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto"></img>
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}₺</p>
          <p className="coin-volume">{volume.toLocaleString()}</p>
          <p className="coin-percent">
            {priceChange < 0 ? (
              <p className="priceChangeRed"> {priceChange.toFixed(2)}%</p>
            ) : (
              <p className="priceChangeGreen">{priceChange.toFixed(2)}% </p>
            )}
          </p>
          <p className="coin-marketcap">Mrkt Cap : {marketCap}₺</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;