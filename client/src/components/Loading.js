import React from "react";
import "../css/loading.css";

var rand = Math.floor(Math.random() * 6);

function Loading() {
  return (
    <div className="loading-box">
      <img
        className="animated-gif"
        src={process.env.PUBLIC_URL + "/loading/loading" + rand + ".gif"}
        alt="loadingpic"
      />
      <div className="loading">
        <img
          className="icon"
          src={process.env.PUBLIC_URL + "/loading/loading-icon.gif"}
          alt="loading_icon"
        />
      </div>
    </div>
  );
}

export default Loading;
