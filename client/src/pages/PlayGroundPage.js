import React from "react";
import Bottom from "../components/Bottom";
import "../css/playground.css";
import Draggable from "react-draggable";

function PlayGroundPage() {
  return (
    <div className="playgroundpage">
      <div className="playground">
        <div className="drag_item">
          <Draggable>
            <img
              src={process.env.PUBLIC_URL + "/dragItem/Tamamo_Ohayou.png"}
              alt={"Tamamo1"}
            />
          </Draggable>
          <Draggable>
            <img
              src={process.env.PUBLIC_URL + "/dragItem/Tamamo_Ohayou.png"}
              alt={"Tamamo2"}
            />
          </Draggable>
        </div>
      </div>
      <Bottom
        book={false}
        play={true}
        home={false}
        short={false}
        hist={false}
      />
    </div>
  );
}

export default PlayGroundPage;
