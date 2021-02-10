import React from 'react';
import logo from './logo.svg';
import './App.css';
import Animation101 from './Experiments/Playground/Animation101'
import LoadGtltfModel from './Experiments/Playground/LoadGtltfModel'
import {BrowserReact, BrowserRouter, Route, Switch} from 'react-router-dom'
import FirstScene from './Experiments/ThreeJS/FirstScene/first-scene.component'
import ModelViewerCarousel from './Experiments/ModelViewer/model-viewer-carousel.component';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route exact path='/' component={ModelViewerCarousel} />
            <Route exact path='/super-media-bros' component={ModelViewerCarousel} />
            <Route path='/Animation101' component={Animation101} />
            <Route path='/LoadGtltfModel' component={LoadGtltfModel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
