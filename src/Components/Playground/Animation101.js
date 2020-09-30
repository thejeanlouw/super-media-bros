import React from 'react';
import * as BABYLON from '@babylonjs/core';
 import SceneComponent from 'babylonjs-hook'; 

const createScene = scene => {
    const canvas = scene.getEngine().getRenderingCanvas();
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var boxy = new BABYLON.Mesh.CreateBox("boxy", 10.0, scene);
    boxy.position.x = -20;

    var boxer = new BABYLON.Mesh.CreateBox(boxer,10.0,scene);
    boxer.position.x = 20

    var boxymation = new BABYLON.Animation("boxymation", 
                                         "scaling.x", 
                                         30, 
                                         BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                         BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
                                         );

    var keys = []
  
}

const Animation101 = () => 
{
    return (
    <div>
      <SceneComponent antialias onSceneReady={createScene}  id='my-canvas' className="my-canvas"/>
    </div>)
}
export default Animation101