import React from 'react';
import * as BABYLON from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook'; 
import '@babylonjs/loaders'


const createScene = scene => {
    const canvas = scene.getEngine().getRenderingCanvas();
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    debugger;
    BABYLON.SceneLoader.Append(`${process.env.PUBLIC_URL}/assets/`, "alien.glb", scene, function (newMeshes) {
        debugger;
        scene.createDefaultCameraOrLight(true);
        scene.activeCamera.attachControl(canvas, false);
        scene.activeCamera.alpha += Math.PI; // camera +180°
    });

}

const onRender = scene => {
    
}

const LoadGtltfModel = () => 
{
    return (
    <div>
      <SceneComponent antialias onSceneReady={createScene} onRender={onRender} id='my-canvas' className="my-canvas"/>
    </div>)
}
export default LoadGtltfModel