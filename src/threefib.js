import ReactDOM from 'react-dom'
import React, { useRef, useState, Component } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'


function sBox(props) {






}

class Box extends Component{

    componentDidMount(){
        this.loadObjModel('./test4.mtl', './test4.obj');
    }






    loadObjModel = (materialURL, objectURL) => {
        new MTLLoader().load(materialURL, materials => {
            materials.preload();

            console.log('Loaded Materials');
            var objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(
                objectURL,
                object => {
                    console.log("Loaded Obj" + object);
                    let mesh = object;
                    this.scene.add(object);
                    mesh.position.set(0, 0, 0);
                    mesh.scale.set(0.07, 0.07, 0.07);
                },
                xhr => {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                error => {
                    console.log("An error has occured - " + error);
                }
            );
        });
    };

    render() {
        return(
            <div></div>
        );
    }

}


export default Box;