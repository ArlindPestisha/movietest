import React, { useState } from 'react';
import axios from 'axios'

// Below all the imports for Components
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import InfoMovie from './components/InfoMovie/InfoMovie';

const App = () => {

  // Using Hooks to set the state
  const [state, setState] = useState({
    // s is for search
    s: "",
    // results is after we search and we render to the UI
    results: [],
    // selected is after we click to the film Poster to give use Info for the film
    selected: {}
  });

  // API from omdbapi with a personal API KEY to use
  const apiurl = "http://www.omdbapi.com/?apikey=13869b4";

  //Function for the search
  const search = (e) => {
    //Here I am using a conditional statement and also I am listen for the key
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return{...prevState, results: results}
        });
      });
    };
  };

  //Function to handel the input in the search box
  const handleInput = (e) => {
    let s = e.target.value

    setState(prevState => {
      return {...prevState, s: s}
    });
  };

//Function for the movie when it is clicked to get more info for that specific movie
const openMovie = id => {
  axios(apiurl + '&i=' + id).then(({ data }) => {
    let result = data;

    setState(prevState => {
      return { ...prevState, selected: result }
    });
  });
};

//Function to close the Movie page info and to get back to the home page
const closeMovie = () => {
  setState(prevState => {
    return { ...prevState, selected: {} }
  });
};

  return (
    <div className="App">
      <header>
        <h1>Find your Movie</h1>
      </header>
      <main>
        <Search 
          handleInput={handleInput}
          search={search} 
        />

        <Results results={state.results} openMovie={openMovie} />

        {(typeof state.selected.Title != "undefined") ? <InfoMovie selected={state.selected} closeMovie={closeMovie} /> : false}
      </main>
    </div>
  );
};

export default App;
