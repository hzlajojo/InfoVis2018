function cube_torusknot() {
  var width = window.innerWidth  ;
  var height = window.innerHeight/2 ;

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
  		// camera.position.z = 400;
  camera.position.set( 0, 0, 5 );
  // scene.add( camera );

  var light = new THREE.PointLight();
  light.position.set( 5, 5, 5 );
  scene.add( light );

  var renderer = new THREE.WebGLRenderer( { antialias: true }  );
	renderer.setClearColor(obj.color , 1.0);// Color of renderer
  renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( width, height );
  document.body.appendChild( renderer.domElement );

  var texture = new THREE.TextureLoader().load( 'marvel.jpg' );
	var geometry1 = new THREE.BoxBufferGeometry( 2, 2, 2 );
	var material1 = new THREE.MeshBasicMaterial( { map: texture } );
	var mesh = new THREE.Mesh( geometry1, material1 );
  mesh.position.x = -2;
  mesh.position.y =0;
  mesh.position.z = 0;
	scene.add( mesh );

  var geometry2 = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
  var material2 = new THREE.ShaderMaterial ({
    vertexColors: THREE.VertexColors,
    vertexShader: document.getElementById('phong.vert').text,
    fragmentShader: document.getElementById('phong.frag').text,
    uniforms: {
      light_position: { type: 'v3', value: light.position }
    }
  });
  var torus_knot = new THREE.Mesh( geometry2, material2 );
  torus_knot.position.x = 2;
  torus_knot.position.y = 0 ;
  torus_knot.position.z = 0 ;
  scene.add( torus_knot );

  window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize() {
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize( width , height );
	}

  loop();

  function loop() {
    requestAnimationFrame( loop );
    renderer.setClearColor(obj.color,1.0);// Color of renderer

  	mesh.rotation.x += obj.Rotation_X;
  	mesh.rotation.y += obj.Rotation_Y;
  	mesh.rotation.z += obj.Rotation_Z;
    torus_knot.rotation.x += 0.01;
    torus_knot.rotation.y += 0.01;

    renderer.render( scene, camera );
  }
}
