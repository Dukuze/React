import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  React, { useReducer } from 'react';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';


function App() {

  return (

    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
        VVA MIGRATION
        </p>


        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}



      </header>
    </div>

  );
}

export default App;
