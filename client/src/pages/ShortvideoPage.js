import React from "react";
import Bottom from "../components/Bottom";
import "../css/shortvideo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data as list } from "../localData/short_video_list.js";

function ShortvideoPage() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const randList = shuffle(list);
  const newList = randList.slice(0, 11);

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
    <div className="shortpage">
      <Carousel
        showThumbs={false}
        showArrows={false}
        axis="vertical"
        showIndicators={false}
        showStatus={false}
      >
        {newList.map((video, i) => (
          <div className="short_box" key={i}>
            <div className="short">
              <video loop controls>
                <source
                  src={process.env.PUBLIC_URL + "/short/" + video + ".mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <p>{video}</p>
          </div>
        ))}
      </Carousel>
      <Bottom
        book={false}
        play={false}
        home={false}
        short={true}
        hist={false}
      />
    </div>
  );
}

export default ShortvideoPage;
