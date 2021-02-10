import React from 'react';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core';
 import SceneComponent from 'babylonjs-hook'; 

const createScene = scene => {
    
}

const EmptyScene = () => 
{
    return (
    <div>
      <SceneComponent antialias onSceneReady={createScene} id='my-canvas' className="my-canvas"/>
    </div>)
}
export default EmptyScene