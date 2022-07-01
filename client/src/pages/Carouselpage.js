import React, { useEffect, useState } from "react";
import "../css/carousel.css";
import Loading from "../components/Loading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Items = [
  "DirtyFrontLeonberger.mp4",
  "MildLittlePerch.mp4",
  "UnnaturalToughSkipper.mp4",
  "ScalyDeliciousHoatzin.mp4",
];

function Showcase() {
  setTimeout(() => {
    const mut = new MutationObserver(() => {
      document.querySelectorAll("video").forEach((vid) => vid.pause());
    });

    const div = document.querySelector(".slide");
    mut.observe(div, {
      attributes: true,
    });
  }, 1000);

  return (
    <div className="first_layer">
      <img
        src={
          process.env.PUBLIC_URL + "/images/Fatekaleid-liner-Prisma210831-7.png"
        }
        alt={"background"}
      />
      <Carousel infiniteLoop={true} showThumbs={false} showArrows={false}>
        {Items.map((video, i) => (
          <div className="second_layer" key={i}>
            <video loop controls>
              <source
                src={process.env.PUBLIC_URL + "/carousel/" + video}
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function Carouselpage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <div>{loading === false ? <Showcase /> : <Loading />}</div>;
}

export default Carouselpage;
