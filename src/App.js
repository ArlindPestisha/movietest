import React from 'react';

// Below all the imports for Components
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Find your Movie</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
