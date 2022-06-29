import React from "react";
import "./Card.css";
import olay from "./public/olay.png";
import ShopButton from "./ShopButton";
function Card() {
  return (
    <div className="card">
      <img className="tg_image" src={olay} alt="" />
      <div className="tg_text">
        <p className="tg_h6">OLAY</p>
        <p className="tg_para">Olay White Radiance Creame</p>
        <p className="tg_price">₹2,500</p>
        <p className="tg_discount">(50% OFF)</p>
        <p className="tg_newprice">₹2,000</p>
        <div>
          <ShopButton />
        </div>
      </div>
    </div>
  );
}

export default Card;
