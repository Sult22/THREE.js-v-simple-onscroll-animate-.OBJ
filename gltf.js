import * as THREE from 'three';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

let camera, scene, renderer;
let gui;

const state = { variant: 'midnight' };
var div = document.querySelector('#bg')
console.log(div.height)
console.log(div.width)
console.log(window.innerWidth)


init();
render();



function init() {

    const container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, div.offsetHeight/ div.offsetWidth, 0.25, 20 );
    camera.position.set( 2.5, 1.5, 3.0 );

    scene = new THREE.Scene();

    new RGBELoader()
      
        .load( 'objects/map.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

           
            scene.environment = texture;

            render();

            // model

            const loader = new GLTFLoader();
            loader.load( 'objects/zbuling_kniha.gltf', function ( gltf ) {

                gltf.scene.scale.set( 0.1, 0.1, 0.1 );

                scene.add( gltf.scene );

          

                render();

            } );

        } );

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true} );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( div.offsetHeight,  div.offsetWidth );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0;
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild( renderer.domElement );

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render ); // use if there is no animation loop
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.target.set( 0, 0.5, - 0.2 );
    controls.update();

  

}

const gridHelper = new THREE.GridHelper( 500, 200,);
scene.add(gridHelper)



//

function render() {

    renderer.render( scene, camera );

}