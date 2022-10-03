// import logo from './logo.svg';
import './App.css';
import axios, { Axios } from 'axios';
import { useState } from 'react';

function App() {

  const [joke, setjoke] = useState("");

  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      console.log(response);
      setjoke(response.data.setup + "..." + response.data.punchline);
    })
  }
  return (
    <div>

      <button onClick={getJoke}>Get Quotes</button>
      {joke}

    </div>
  );
}

export default App;
