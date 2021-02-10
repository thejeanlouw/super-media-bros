import React from 'react'
import '@google/model-viewer'
import shirt from '../Siemens/Assets/FCB-AWAY-HWT_01.gltf'
import room from './assets/Vinyl-Room-01.glb'
import alien from '../Playground/Assets/alien.glb'

import './model-viewer.styles.css'

const buildModelViewer = (src) => (<model-viewer
        
        className = 'model'
        src={src}
        alt='model name'
        ar
        loading='lazy'
        camera-controls
        auto-rotate
        autoplay>
        </model-viewer>)



class ModelViewerCarousel extends React.Component {
    
    currentViewIndex = 0;

    viewSelection = [buildModelViewer(shirt), 
        buildModelViewer(room), 
        buildModelViewer(alien)];

    state = {
        view: this.viewSelection[0]
    }


    nextView=()=>{
        this.currentViewIndex++;
        if(this.currentViewIndex>=this.viewSelection.length){
            this.currentViewIndex = 0;
        }
        console.log("idx",this.currentViewIndex);
        this.setState({view:this.viewSelection[this.currentViewIndex]});
        clearTimeout(this.timer);
        this.timer = setTimeout(this.nextView, 20000);
    }
    
    timer = setTimeout(this.nextView, 20000);

    render(){
    return (
        <div className='model-holder'>
        {this.state.view}
        </div>
    )}
}

export default ModelViewerCarousel;
