import React, { Component } from 'react'
import * as THREE from 'three'

export default class FirstScene extends Component {

    scene = null;
    camera = null;
    renderer = null;
    cube = null;

    adder = 0.05;

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffabab);

        this.camera = new THREE.PerspectiveCamera(30,
                        window.innerWidth / window.innerHeight,
                        1, 1000);
        this.camera.position.z = 5;

       //this.setState({scene: this.scene, camera:this.camera});

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        window.addEventListener('resize', this.onWindowResize);

        document.body.appendChild(this.renderer.domElement);
        this.createCube();
        this.mainloop();
    }

    onWindowResize= () => {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );

    }

    mainloop = () =>{
       // this.setState({scene: this.scene, camera:this.camera})
        this.cube.position.y+= this.adder;
        if(this.cube.position.y>1 || this.cube.position.y<-1) this.adder *= -1;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.mainloop);
    }

    createCube = () =>{
        let geometry = new THREE.BoxGeometry(1,1,1);
        let material = new THREE.MeshBasicMaterial({color:0x00a1cb});
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
    }

    cubeLeft=()=>{
        this.cube.position.x -= 0.1;
    }
    cubeRight=()=>{
        this.cube.position.x += 0.1;
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <button onClick={this.cubeLeft} style={{
                    width: "50%"
                }}>LEFT</button>
                
                <button onClick={this.cubeRight} style={{
                    width: "50%"
                }}>RIGHT</button>
            </div>
        )
    }
}
