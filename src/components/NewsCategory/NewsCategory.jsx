import React from "react";
import "./NewsCategory.css";
const NewsCategory = () => {
  return (
    <>
      <div className="NewsCategory__tab" data-id="sport">
        ALL
      </div>
      <div className="NewsCategory__tab" data-id="cricket">
        CRICKET
      </div>
      <div className="NewsCategory__tab" data-id="football">
        FOOTBALL
      </div>
      <div className="NewsCategory__tab" data-id="tennis">
        TENNIS
      </div>
      <div className="NewsCategory__tab" data-id="basketball">
        BASKETBALL
      </div>
      <div className="NewsCategory__tab" data-id="hockey">
        HOCKEY
      </div>
      <div className="NewsCategory__tab" data-id="volleyball">
        VOLLEYBALL
      </div>
      <div className="NewsCategory__tab" data-id="baseball">
        BASEBALL
      </div>
    </>
  );
};

export default NewsCategory;
