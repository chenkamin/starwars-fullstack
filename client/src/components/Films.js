import React from "react";

function Films(props) {
  return (
    <div className="Film">
      {props.films.map((film, i) => <div 
      key={i} onClick={props.onClick} id={i} className={film.episode_id} >{film.title}
      </div>)}
    </div>
  );
}

export default Films;
