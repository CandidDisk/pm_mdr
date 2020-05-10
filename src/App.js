import React, { useRef, useState, Suspense }  from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import './styles.css'
import * as serviceWorker from './serviceWorker';
import * as THREE from 'three';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import Model from './modelLoad';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Scene = () => {
    const {
        camera,
        gl: { domElement }
    } = useThree()
    return (
        <>
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <orbitControls args={[camera,
                                  domElement]}
                                  enableZoom={true}
                                  enableDamping={true}
                                  />
        </>
    )
}

function App() {
    const controls = useRef()
    useFrame(state => controls.current.update())
    return (
        <div>


            <Canvas colorManagement
                    orthographic camera={{ fov: 100, position: [400, 200, 0]}}>
                <ambientLight />
                <Scene />
                <pointLight position={[10, 10, 10]} />


            </Canvas>
        </div>
    );

}

export default App;
