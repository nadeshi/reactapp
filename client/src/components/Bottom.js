import React from "react";
import "../css/bottom.css";
import {
  AiFillHome,
  AiFillAppstore,
  AiFillBook,
  AiFillVideoCamera,
  AiFillDatabase,
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineDatabase,
  AiOutlineBook,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Bottom({ book, play, home, short, hist }) {
  return (
    <div className="bottom">
      <Link to="/Bookshelf">
        <div className="bottom_box">
          {book ? <AiFillBook /> : <AiOutlineBook />}
        </div>
      </Link>
      <Link to="/PlayGround">
        <div className="bottom_box">
          {play ? <AiFillAppstore /> : <AiOutlineAppstore />}
        </div>
      </Link>
      <Link to="/">
        <div className="bottom_box">
          {home ? <AiFillHome /> : <AiOutlineHome />}
        </div>
      </Link>
      <Link to="/Shortvideo">
        <div className="bottom_box">
          {short ? <AiFillVideoCamera /> : <AiOutlineVideoCamera />}
        </div>
      </Link>
      <Link to="/">
        <div className="bottom_box">
          {hist ? <AiFillDatabase /> : <AiOutlineDatabase />}
        </div>
      </Link>
    </div>
  );
}

export default Bottom;
