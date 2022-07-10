import React from "react";
import Bottom from "../components/Bottom";
import "../css/manga.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeEpisode } from "../features/mangaSlice";

function MangaPage() {
  window.scroll(0,0);
  const name = useSelector((state) => state.manga.manga.name);
  const titles = useSelector((state) => state.manga.manga.title);
  const dispatch = useDispatch();

  return (
    <>
      <div className="manga_name">
        <p>{name}</p>
      </div>
      <div className="bookshelf">
        {titles.map((title, i) => (
          <Link
            key={i}
            to={"/Manga/" + name + "/" + title}
            onClick={() => dispatch(storeEpisode(i))}
            className="cover"
          >
            <LazyLoadImage
              src={
                process.env.PUBLIC_URL +
                "/manga/" +
                name +
                "/cover/" +
                (i + 1) +
                ".jpg"
              }
              alt="cover"
            />

            <p>{title}</p>
          </Link>
        ))}
      </div>
      <Bottom
        book={true}
        play={false}
        home={false}
        short={false}
        hist={false}
      />
    </>
  );
}

export default MangaPage;
