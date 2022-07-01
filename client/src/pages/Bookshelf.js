import React from "react";
import { Link } from "react-router-dom";
import Bottom from "../components/Bottom";
import "../css/bookshelf.css";
import { data as list } from "../localData/manga_list.js";
import { storeManga } from "../features/mangaSlice";
import { useDispatch } from "react-redux";

function Bookshelf() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bookshelf">
        {list.map((list, i) => (
          <Link
            key={i}
            to={"/Manga/" + list.name}
            className="cover"
            onClick={() =>
              dispatch(
                storeManga({
                  name: list.name,
                  pages: list.pages,
                  title: list.title,
                })
              )
            }
          >
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/manga/" +
                  list.name +
                  "/cover/1.jpg"
                }
                alt="cover"
              />
              <p>{list.name}</p>
            </div>
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

export default Bookshelf;
