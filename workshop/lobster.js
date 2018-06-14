var surfaces;
var screen;
var volume = new KVS.LobsterData();
var isovalue = 128;
var bounds;

function lobster()
{
    screen= new KVS.THREEScreen();

    screen.init( volume, {
        width:  window.innerWidth  ,
        height: window.innerHeight/2,
        enableAutoResize: false
    });

    surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ width, height ] );
    });

    screen.loop();
}
