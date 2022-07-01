import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

function Card(props) {
  const data = props.data;
  return (
    <Link
      to={"/video/" + data.series + "/" + data.id}
      className="card"
      state={{ video: data }}
    >
      <img
        src={
          process.env.PUBLIC_URL +
          "/video/" +
          data.producer +
          "/" +
          data.series +
          "/" +
          data.id +
          "/" +
          data.id +
          ".jpg"
        }
        alt={data}
      />
      <div className="card_info">
        <h3>{data.name}</h3>
        <p>{data.producer}</p>
        <p>{data.date}</p>
      </div>
    </Link>
  );
}

export default Card;
