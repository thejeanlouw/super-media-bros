import React from 'react';
import logo from './logo.svg';
import './App.css';
import Animation101 from './Components/Playground/Animation101'
import LoadGtltfModel from './Components/Playground/LoadGtltfModel'
import Navbar from './Components/Layout/Navbar'
import {BrowserReact, BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Animation101} />
            <Route path='/Animation101' component={Animation101} />
            <Route path='/LoadGtltfModel' component={LoadGtltfModel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
