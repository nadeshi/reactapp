import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Bottom from "../components/Bottom";
import SeriesList from "../components/SeriesList";
import "../css/video.css";

function VideoPage() {
  window.scroll(0,0);
  const location = useLocation();
  const { video } = location.state;

  const [state] = useState(video);

  useEffect(() => {
    if (state !== video) {
      window.location.reload();
    }
  }, [state, video]);

  return (
    <>
      <div className="play-container">
        <video controls>
          <source
            src={
              process.env.PUBLIC_URL +
              "/video/" +
              video.producer +
              "/" +
              video.series +
              "/" +
              video.id +
              ".mp4"
            }
            type="video/mp4"
          />
        </video>

        <SeriesList data={video} />
      </div>
      <Bottom
        book={false}
        play={false}
        home={false}
        short={false}
        hist={false}
      />
    </>
  );
}

export default VideoPage;
