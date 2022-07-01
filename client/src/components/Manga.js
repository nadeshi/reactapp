import React from "react";
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Mangabottom from "./Mangabottom";

function Manga() {
  window.scroll(0,0);
  const name = useSelector((state) => state.manga.manga.name);
  const pages = useSelector((state) => state.manga.manga.pages);
  const episode = useSelector((state) => state.manga.episode);

  const page = new Array(pages[episode]).fill(0);

  return (
    <div className="manga">
      {page.map((u, i) => (
        <LazyLoadImage
          key={i}
          src={
            process.env.PUBLIC_URL +
            "/manga/" +
            name +
            "/" +
            (episode + 1) +
            "/" +
            (i + 1) +
            ".jpg"
          }
          alt="manga"
        />
      ))}
      <Mangabottom/>
    </div>
  );
}

export default Manga;
