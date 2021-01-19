import React from 'react'
import {moviesService} from "./services";
import {BaseLayout} from './layouts'
import {Home} from "./pages";
import './App.css';


// import logo from './logo.svg';
// import {fetchSomeData} from "./services";

// fetchSomeData().then(console.log)

function App() {
  return (
      <BaseLayout>
        <Home />
      </BaseLayout>

  );
}

export default App;
