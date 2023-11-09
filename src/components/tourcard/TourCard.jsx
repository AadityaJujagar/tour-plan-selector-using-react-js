import React, { useState } from "react";

function TourCard({ id, name, info, image, price, selectTour, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 175)}...`;

  const readmoreHandler = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="tourCard">
      <img src={image} alt="" />
      <div className="tourInfo">
        <div className="tourDetails">
          <h4 className="tourPrice">{price}</h4>
          <h4 className="tourName">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="readMore" onClick={readmoreHandler}>
            {readmore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>
      <button className="btnGreen" onClick={() => selectTour(id)}>
        Interested
      </button>
      <button className="btnRed" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default TourCard;
