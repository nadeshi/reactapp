import React, { useState } from "react";
import Card from "../components/Card";
import useCollapse from "react-collapsed";

function DropdownItem(props) {
  const video = props.video;
  const i = props.i;
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div>
      <div
        className="collapsible"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <p style={{ color: i ? "white" : "#0cecf0 " }}>{video.name}</p>
      </div>

      <div {...getCollapseProps()}>
        <div className="content">
          <Card data={video} />
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;
