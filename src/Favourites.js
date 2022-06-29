import React from "react";

import img1 from "./public/img1.png";
import img2 from "./public/dress.png";
import img3 from "./public/img3.png";
import img4 from "./public/img2.png";
import "./Favourites.css";
function Favourites() {
  return (
    <>
      <div className="header">
        <h1 className="tg_products">Complete my look</h1>
{/* <div></div> */}
        <p className="para">Shop all my posts specially curated for you</p>
        <div className="img-container">
          <div className="row">
            <div className="column">
              <img className="img1" src={img1} alt="" />
              <img className="img2" src={img2} alt="" />
              <img className="img3" src={img4} alt="" />
              <img className="img3" src={img3} alt="" />
            </div>
            <div className="column2">
              <img className="img2" src={img2} alt="" />
              <img className="img1" src={img1} alt="" />
              <img src={img1} className="img1" alt="" />
              <img src={img3} className="img3" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Favourites;
