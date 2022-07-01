import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { animated, useSpring } from "react-spring";

function Random() {
  const fadein = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-20px, -0px)" },
    config: { duration: 1000 },
  });

  const [random, setrandom] = useState("");

  useEffect(() => {
    getrandom();
  }, []);

  const getrandom = () => {
    axios
      .get("http://192.168.128.128:4000/random")
      .then((res) => {
        const data = res.data;
        setrandom(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {random.length
        ? random?.map((data, i) => (
            <animated.div style={fadein} key={i}>
              <Card data={data} />
            </animated.div>
          ))
        : null}
    </div>
  );
}

function RandomPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <div>{loading === false ? <Random /> : <Loading />}</div>;
}

export default RandomPage;
