import React, { useState, useRef } from "react";
import makeApiCall from "../services/apiService";
import debounce from "../services/debounceService";
import Films from "./Films";
import Film from "./Film";
import ErrorHandler from "./ErrorHandler";
import {ErrorBoundary} from 'react-error-boundary'


function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setCurrentFilm] = useState([]);
  const [characters, setCharacters] = useState([])
  const inputRef = useRef(null);
  const [error, setError] = useState("");
 
const renderError = (error) => {
  return(
    <ErrorHandler error={error}/>
  )
}

  const onChange = (e) => {
    const getFilms = async () => {
      try{
        const response = await makeApiCall("get", `films?title=${e.target.value}`);
        setFilms(response.results);
      }catch(e){
        console.log(e)
        console.log("please try again")
        setError(e)
      }
    }
    getFilms();

  }
  const resetFilms = () => {
    setFilms([])
    setCurrentFilm([])
    inputRef.current.value = "";
    setError("")
  }
  const processChange = debounce((e) => onChange(e));

  const onClick = async (e) => {
    e.preventDefault();
    const episodeId = e.target.className
    const filmIndex = e.target.id;
    setCurrentFilm(films[filmIndex]);
    setCharacters(await makeApiCall("get", `films/${episodeId}?expand=characters`))
  }


  return (
    <div className="App">
      <h1>Star Wars Films</h1>
      <div>
        <input type="text" placeholder="Search for a film" ref={inputRef} pattern="[A-Za-z]" onChange={processChange} />
        <span onClick={resetFilms}>reset button</span>
      </div>

      {selectedFilm.length === 0 ?
        <Films films={films} resetFilms={resetFilms} onClick={onClick} /> :
        <Film characters={characters} />}
        {error ? <ErrorHandler error={error}/> : null}
    </div>
  );
}

export default App;
