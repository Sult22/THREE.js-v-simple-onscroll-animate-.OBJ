import * as THREE from 'three';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



//scene
const scene = new THREE.Scene();


//camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5
camera.position.x = 8 
camera.position.y = 0.1 


//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), alpha:true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
function render() {

  renderer.render( scene, camera );

}

//loader 

const loader = new OBJLoader();
loader.load( '/public/objects/Cube Zypes.obj', function ( obj ) {
  obj.name ='sun'
  scene.add(obj)
  obj.position.x = -4;
  obj.position.y = -2;
  obj.position.z = -2;
},);

//orbitcontrols
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.enableRotate = false;
controls.enablePan = false;
controls.listenToKeyEvents( window );


//Gridhelper
const gridHelper = new THREE.GridHelper( 35 );


//animation 
function animate() {

	requestAnimationFrame( animate );

  controls.update()
  //loaded obj animation
  const sun = scene.getObjectByName('sun');
  if (sun) {
    sun.rotation.x += 0.0005;
    sun.rotation.y += 0.0007;
    sun.rotation.z += 0.00025;
    
//onscroll action
function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  sun.rotation.x += 0.001;

  camera.position.x = 8 + t * 0.00122;
  camera.position.y = 0.1 + t * 0.001;
  camera.position.z = 5 + t * 0.001;
  
}
document.body.onscroll = moveCamera
//end of onscroll action

  }

	render()

}
//add items to scene
//scene.add(gridHelper)

animate()