import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { animated, useSpring } from "react-spring";

const PAGE = 0;

function ListPage() {
  const fadein = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-20px, -0px)" },
    config: { duration: 1000 },
  });

  const { producer } = useParams();
  const [videos, setvideos] = useState("");
  const [page, setpage] = useState(PAGE);

  useEffect(() => {
    axios
      .get("http://192.168.128.128:4000/producerVideos", {
        params: { producer: producer, pages: page },
      })
      .then((res) => {
        const data = res.data;
        setvideos((videos) => [...videos, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, producer]);

  const fetchdata = () => {
    setpage(page + 1);
  };

  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fetchdata();
    }
  };

  return (
    <div>
      {videos.length
        ? videos?.map((data, i) => (
            <animated.div style={fadein} key={i}>
              <Card data={data} />
            </animated.div>
          ))
        : null}
    </div>
  );
}

export default ListPage;
