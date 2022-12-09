import * as THREE from 'three';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'



//get size of a pseudoelement
var div = document.querySelector('#sizer')
console.log(div.offsetWidth )
console.log(div.offsetHeight )
//mouse variables
let mouse = {
	x: 200,
	y: 200
};


//scene
const scene = new THREE.Scene();


//camera
const camera = new THREE.PerspectiveCamera(80, div.offsetWidth/div.offsetHeight, 0.1, 1000);
camera.position.z = 0
camera.position.x = 13
camera.position.y = -10

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), 
  alpha:true,
  antialias: true,
});

    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
   
renderer.setSize( div.offsetWidth,div.offsetHeight );
function render() {

  renderer.render( scene, camera );

}

//lights
 const cameraLight = new THREE.SpotLight(0xffffff, 6);
 cameraLight.castShadow = true;


 cameraLight.shadow.bias = -0.0001;

cameraLight.shadow.camera.near = 0.1; // default
 cameraLight.shadow.camera.far = 500; // default



cameraLight.visible = true;
cameraLight.distance = 40;
cameraLight.decay = 7;
cameraLight.angle = Math.PI/5;
cameraLight.penumbra = 0.5; 


    
camera.add( cameraLight );
cameraLight.position.set( 0, 0, 3);
scene.add( camera );
cameraLight.target = camera;

//pointlight mouse follow
var pointLight = new THREE.PointLight(0xAAAAAA, 0.35);
pointLight.position.set(0, 0, 0);
pointLight.castShadow = true;
pointLight.shadow.bias = 0.0001;
pointLight.mapSizeWidth = 2048; // Shadow Quality
pointLight.mapSizeHeight = 2048; // Shadow Quality
scene.add();

//spotlight
const spotLight = new THREE.SpotLight( 0xFB0E0E );
spotLight.position.set( 20, -20, 5 );


spotLight.castShadow = false;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );
const spotLightHelper = new THREE.SpotLightHelper( spotLight );




//spotlight2

const spotLight2 = new THREE.SpotLight( 0x3f87a6 );
spotLight2.position.set( 10, 20, 5 );


spotLight2.castShadow = false;

spotLight2.shadow.mapSize.width = 1024;
spotLight2.shadow.mapSize.height = 1024;

spotLight2.shadow.camera.near = 500;
spotLight2.shadow.camera.far = 4000;
spotLight2.shadow.camera.fov = 30;

//scene.add(spotLight2)


//ambient
const ambientLight = new THREE.AmbientLight(0xfffeef, 0.55);
scene.add(ambientLight);


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

//gltf_loader
const gloader =new GLTFLoader();

  gloader.load(
    // resource URL
    'objects/zbuling_kniha.gltf',
    // called when the resource is loaded
    function ( gltf ) {
      

        gltf.scene.name = 'sun';
        gltf.scene.position.y = 2
        gltf.scene.position.x = -3.5
      scene.add( gltf.scene );
            
        
    
      
  
    },
    // called while loading is progressing
    function ( xhr ) {
  
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
    },
    // called when loading has errors
    function ( error ) {
  
      console.log( 'An error happened' );
  
    }
  );

//loader 

// const loader = new OBJLoader();
// loader.load( '/public/objects/Cube Zypes.obj', function ( obj ) {
//  //material
// //   obj.traverse( function( child ) {
// //     if ( child instanceof THREE.Mesh ) {
// //         child.material = lambertTest;
// //     }
// // } );
  
//   obj.name ='sun'
//   scene.add(obj)
//   obj.position.x = -4;
//   obj.position.y = -2;
//   obj.position.z = -2;
// },);

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
    sun.rotation.x += 0.000;
    sun.rotation.y -= 0.001;
    sun.rotation.z -= 0.000;
    
//onscroll action
function moveCamera(){
  var t = document.body.getBoundingClientRect().top;
  sun.rotation.x -= 0.00003;
  let posx = 13
  let posy = -10
  let posz = 0

  camera.position.x = posx + t * 0.001;
  camera.position.y = posy + t * 0.001;
  camera.position.z = posz + t * 0.02;


  
  
}
document.body.onscroll = moveCamera
//end of onscroll action

  }

	render()

}
//add items to scene
//scene.add(gridHelper)

animate()