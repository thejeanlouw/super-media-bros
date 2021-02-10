import React from 'react';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core';
 import SceneComponent from 'babylonjs-hook'; 

const createScene = scene => {
  var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
}

const FreeCameraScene = () => 
{
    return (
    <div>
      <SceneComponent antialias onSceneReady={createScene} id='my-canvas' className="my-canvas"/>
    </div>)
}
export default FreeCameraScene