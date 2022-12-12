import React, { useState, useEffect, useRef } from "react";
import makeApiCall from "../utils/apiService";
// import Film from "./Film";
import debounce from "../utils/debounceService";
import Films from "./Films";
import Film from "./Film";


function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setCurrentFilm] = useState([]);
  const [characters , setCharacters] = useState([])
  const inputRef = useRef(null);

  const onChange = (e) => {
    const getFilms = async () => {
      const response = await makeApiCall("get", `films?title=${e.target.value}`);
      console.log(films)
      setFilms(response.results);
    }
    getFilms();

  }
  function resetFilms() {
    setFilms([])
    setCurrentFilm([])
    inputRef.current.value = "";
  }
  const processChange = debounce((e) => onChange(e));

  const onClick = async (e) => {
    e.preventDefault();
    console.log("E - class", e.target.className)
    const episodeId = e.target.className
    const filmIndex = e.target.id;
    setCurrentFilm(films[filmIndex]);
    setCharacters ( await makeApiCall("get", `films/${episodeId}`))

  }


  return (
    <div className="App">
      <h1>Star Wars Films</h1>
      <div>
      <input type="text" placeholder="Search for a film" ref={inputRef} onChange={processChange} />
      <span onClick={resetFilms}>reset</span>
      </div>
      {selectedFilm.length === 0 ||  films.length === 1 ? <Films films={films} resetFilms={resetFilms} onClick={onClick} /> :
        <Film characters={characters} />}
    </div>
  );
}

export default App;
