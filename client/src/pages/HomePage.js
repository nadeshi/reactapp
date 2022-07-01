import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/home.css";
import { Link } from "react-router-dom";
import Bottom from "../components/Bottom";

const default_pages = ["Search", "Latest", "Random", "Carousel"];

function HomePage() {
  const [producers, setproducers] = useState("");

  useEffect(() => {
    getAllproducer();
  }, []);

  const getAllproducer = () => {
    axios
      .get("http://192.168.128.128:4000/producer")
      .then((res) => {
        const data = res.data;
        setproducers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="homecontainer">
      <div className="category_list">
        {default_pages.map((data, i) => (
          <Link to={"/" + data} className="category_box" key={i}>
            <div className="category_info">
              <img
                src={process.env.PUBLIC_URL + "/images/" + data + ".gif"}
                alt={data}
              />
              <p>{data}</p>
            </div>
          </Link>
        ))}

        {producers.length
          ? producers?.map((data, i) => (
              <Link
                to={"/List/" + data.producer}
                className="category_box"
                key={i}
              >
                <div className="category_info">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/" +
                      data.producer +
                      ".png"
                    }
                    alt={data.producer}
                  />
                  <p>{data.producer}</p>
                </div>
              </Link>
            ))
          : null}
      </div>
      <Bottom
        book={false}
        play={false}
        home={true}
        short={false}
        hist={false}
      />
    </div>
  );
}

export default HomePage;
