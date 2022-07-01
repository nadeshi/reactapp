import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { animated, useSpring } from "react-spring";

const PAGE = 0;

function Latest() {
  const fadein = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-20px, -0px)" },
    config: { duration: 1000 },
  });

  const [videos, setvideos] = useState("");
  const [page, setpage] = useState(PAGE);

  useEffect(() => {
    axios
      .get("http://192.168.128.128:4000/video", { params: { pages: page } })
      .then((res) => {
        const data = res.data;
        setvideos((videos) => [...videos, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

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

function LatestPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <div>{loading === false ? <Latest /> : <Loading />}</div>;
}

export default LatestPage;
