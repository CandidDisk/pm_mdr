import React, { useRef, useState, Suspense }  from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import './styles.css'
import App from './App';
import Box from './threefib';
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
                <Model
                    scale={[0.06, 0.06, 0.06]}
                />
            </Suspense>
            <ambientLight />

            <orbitControls args={[camera,
                                  domElement]}
                                  enableDamping={true}
                                  dampingFactor={0.25}
                                  />
        </>
    )
}

ReactDOM.render(
    <Canvas colorManagement
            orthographic camera={{ fov: 100, position: [-600, -400, 0], far: 4000}}>
        <Scene />
    </Canvas>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
