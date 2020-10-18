import React, { useState } from 'react';
import axios from 'axios'

// Below all the imports for Components
import Search from './components/Search';
import Results from './components/Results';

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
  const apiurl = " http://www.omdbapi.com/?apikey=13869b4";

  //Function for the search
  const search = (e) => {
    //Here I am using a conditional statement and also I am listen for the key
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.s).then(({ data }) => {
        let results = data.Search

        setState(prevState => {
          return{...prevState, results: results}
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value

    setState(prevState => {
      return {...prevState, s: s}
    });
    console.log(state.s)
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
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
