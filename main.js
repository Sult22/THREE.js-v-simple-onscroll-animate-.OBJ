import * as THREE from 'three';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



//mouse variables
let mouse = {
	x: 200,
	y: 200
};


//scene
const scene = new THREE.Scene();


//camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5
camera.position.x = 8 
camera.position.y = 3


//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), 
  alpha:true,
  antialias: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
function render() {

  renderer.render( scene, camera );

}

//lights
// const cameraLight = new THREE.SpotLight(0xffffff, 6);
// cameraLight.castShadow = true;


// cameraLight.shadow.bias = -0.0001;

// cameraLight.shadow.camera.near = 0.1; // default
// cameraLight.shadow.camera.far = 500; // default



// cameraLight.visible = true;
// cameraLight.distance = 40;
// cameraLight.decay = 16;
// cameraLight.angle = Math.PI/4;
// cameraLight.penumbra = 0.9; 


    
// camera.add( cameraLight );
// cameraLight.position.set( 0, 0, 3);
// scene.add( camera );
// cameraLight.target = camera;

//pointlight mouse follow
var pointLight = new THREE.PointLight(0xAAAAAA, 0.35);
pointLight.position.set(0, 0, 0);
pointLight.castShadow = true;
pointLight.shadow.bias = 0.0001;
pointLight.mapSizeWidth = 2048; // Shadow Quality
pointLight.mapSizeHeight = 2048; // Shadow Quality
scene.add();


const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
scene.add();


//mouse listener 
document.addEventListener('mousemove', onMouseMove, false);

// On mouse move
function onMouseMove(event) {
	event.preventDefault();
	mouse.x = (event.clientX / window.innerWidth) * 3 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 3 + 1;

	let vector = new THREE.Vector3(mouse.x, mouse.y, 2.5);
	vector.unproject(camera);
	let dir = vector.sub(camera.position).normalize();
	let distance = 8;
	let pos = camera.position.clone().add(dir.multiplyScalar(distance));
	pointLight.position.copy(pos);
};

//materials
var testMaterial = new THREE.MeshBasicMaterial( { 
  color: 0xffffff } );
const lambertTest = new THREE.MeshLambertMaterial({
  color: 0xe0b9e4,
  reflectivity: 200,
  side: THREE.DoubleSide
})

//loader 

const loader = new OBJLoader();
loader.load( '/public/objects/Cube Zypes.obj', function ( obj ) {
 //material
//   obj.traverse( function( child ) {
//     if ( child instanceof THREE.Mesh ) {
//         child.material = lambertTest;
//     }
// } );
  
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
const gridHelper = new THREE.GridHelper( 500, 200,);


//animation 
function animate() {

	requestAnimationFrame( animate );

  controls.update()
  //loaded obj animation
  const sun = scene.getObjectByName('sun');
  if (sun) {
    sun.rotation.x += 0.00002;
    sun.rotation.y -= 0.00007;
    sun.rotation.z -= 0.000025;
    
//onscroll action
function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  sun.rotation.x -= 0.00003;

  camera.position.x = 8 + t * 0.00122;
  camera.position.y = 3 + t * 0.001;
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