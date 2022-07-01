import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/serieslist.css";
import DropdownItem from "./DropdownItem";

function SeriesList(props) {
  const video = props.data;
  const [series, setseries] = useState("");

  useEffect(() => {
    getseries();
  });

  const getseries = () => {
    axios
      .get("http://192.168.128.128:4000/series", {
        params: { series: video.series, id: video.id },
      })
      .then((res) => {
        const data = res.data;
        setseries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {series.length
        ? series?.map((data, i) => (
            <div key={i} className="seriesList">
              <DropdownItem i={i} video={data} />
            </div>
          ))
        : null}
    </div>
  );
}

export default SeriesList;
