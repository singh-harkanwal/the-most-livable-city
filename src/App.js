import React, { Component } from 'react'
import './App.scss'
import {Navbar} from './components/Navbar/Navbar'
import CityList from './components/CityList/CityList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <CityList/>
      </div>
    );
  }
}

export default App;
