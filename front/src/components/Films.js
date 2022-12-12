import React, { useState, useEffect } from "react";
import Film from "./Film";
import Pagination from "./Pagination";
function Films(props) {
  console.log("this is props", props)
  return (
    <div className="Film">
      {props.films.map((film, i) => <div 
      key={i} onClick={props.onClick} id={i} className={film.episode_id} >{film.title
      }</div>)}
    </div>
  );
}

export default Films;
