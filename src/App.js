// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Lol from "../src/loll.PNG"

function App() {
// bvbjhhhhh
// 
  const [joke, setjoke] = useState("");

  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      console.log(response);
      setjoke(response.data.setup + "..." + response.data.punchline);
    })
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-warning text-center pt-5 heading animated fadeInDown'>ARIYO FUNNY JOKES <br /> GENERATOR</h1>

          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <div className='jokesbkg'>
              <h2 className='animated fadeInUp'><cite className='animated fadeInUp'>"{joke}"</cite></h2>
            </div>
          </div>
          <div className='col-md-3'></div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <button
              className='btn btn-warning bt'
              onClick={getJoke}><img 
              className='animated tada infinite'
                src={Lol}
                alt="laughing"
                width="30" /> Tell me another</button>

          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='txt text-center animated fadeInUp'><i>designed by <b>Idowu Ariyo</b></i></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
