function cube1()
{
	var camera, scene, renderer;
	var mesh;
	init();
	animate();
	function init() {
		camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.z = 400;
		scene = new THREE.Scene();
		var texture = new THREE.TextureLoader().load( 'marvel.jpg' );
		var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
		var material = new THREE.MeshBasicMaterial( { map: texture } );
		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setClearColor(obj.color,1.0);// Color of renderer
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );
		//
		window.addEventListener( 'resize', onWindowResize, false );
	}
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}
	function animate() {
		requestAnimationFrame( animate );
		renderer.setClearColor(obj.color,1.0);// Color of renderer
		mesh.rotation.x += obj.Rotation_X;
		mesh.rotation.y += obj.Rotation_Y;
		mesh.rotation.z += obj.Rotation_Z;
		renderer.render( scene, camera );
	}
}

