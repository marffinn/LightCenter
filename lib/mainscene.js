var scene, camera,controls, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, model;

var mscale = .5;


var loader = new THREE.JSONLoader(  );
var tx_loader = new THREE.TextureLoader(  );

var group = new THREE.Group();
var s1,s2,s3;

var top;

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    
    window.addEventListener( 'resize', onWindowResize, false );


    

    var listener = new THREE.AudioListener();
    camera.add( listener );

    // create a global audio source
    var sound = new THREE.Audio( listener );

    var audioLoader = new THREE.AudioLoader();

    //Load a sound and set it as the Audio object's buffer
    audioLoader.load( 'lib/music/lopo.wav', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });
    
    controls.minPolarAngle = - Math.PI/2;
    controls.maxPolarAngle = Math.PI/2;
    controls.minDistance = 30;
	controls.maxDistance = 40;
    
    controls.addEventListener('change', render);

    camera.position.x = 25;
    camera.position.y = 15;
    camera.position.z = 25;
    camera.lookAt(scene.position);

    var light = new THREE.HemisphereLight( 0xffffff, 0x080820, .7 );
    scene.add( light );

    s1 = new THREE.SpotLight(0xffffff, 0.7);
    s1.position.set(-30, 10, 30);
    
    s1.castShadow = true;
    s1.shadowCameraVisible = true;
    s1.shadow.bias = - 0.001;
    s1.shadowCameraNear = .1;
    s1.shadowCameraFar = 100;
    s1.shadowCameraFov = 45;

    s1.shadowMapWidth = 1024;
    s1.shadowMapHeight = 1024;
    
    s1.name = 'spotlight 1';
    scene.add(s1);

    s2 = new THREE.SpotLight(0xffffff, 0.3);
    s2.position.set(30, 10, -80);
    s2.name = 'spotlight 2';
    scene.add(s2);
    
    s3 = new THREE.SpotLight(0xffffff, 0.3);
    s3.position.set(30, 10, 20);
    s3.name = 'spotlight 3';
    scene.add(s3);    

    var size = 10;
    var divisions = 5;

    var gridHelper = new THREE.GridHelper( size, divisions );
    gridHelper.position.y =-6;
    scene.add( gridHelper );

    var top = new THREE.TextureLoader().load( 'lib/models/LINUS/topjpg.jpg' , function () {
        mat = new THREE.MeshPhongMaterial({
            map: top,
            shininess: 0,
            reflectivity: 0,
            bumpScale: .0001,
            combine: THREE.MultiplyOperation
        });
        loader.load('lib/models/LINUS/top.json', function (geo) {
            top = new THREE.Mesh(geo, mat);
            top.material.needsUpdate = true;
            top.position.set(0, 0, 0);
            top.scale.set(mscale, mscale, mscale);
            top.castShadow = true;
            top.receiveShadow = true;
            top.name = 'top';
            group.add(top);
        });
    });
    var bottom = new THREE.TextureLoader().load( 'lib/models/LINUS/topjpg.jpg' , function () {
        mat = new THREE.MeshPhongMaterial({
            map: bottom,
            shininess: 0,
            reflectivity: 0,
            bumpScale: .0001,
            combine: THREE.MultiplyOperation
        });
        loader.load('lib/models/LINUS/baza.json', function (geo) {
            bottom = new THREE.Mesh(geo, mat);
            bottom.material.needsUpdate = true;
            bottom.position.set(0, 0, 0);
            bottom.scale.set(mscale, mscale, mscale);
            bottom.castShadow = true;
            bottom.receiveShadow = true;
            bottom.name = 'bottom';
            group.add(bottom);

        });
    });
    
    var light_source = new THREE.TextureLoader().load( 'lib/models/LINUS/topjpg.jpg' , function () {
        mati = new THREE.MeshPhongMaterial({
            color: 0xCCCCCC,
            emissive: 0x000000
            
        });
        loader.load('lib/models/LINUS/light_source.json', function (geo) {
            light_source = new THREE.Mesh(geo, mati);
            light_source.material.needsUpdate = true;
            light_source.position.set(0, 0, 0);
            light_source.scale.set(mscale, mscale, mscale);
            light_source.name = 'light';
            group.add(light_source);

        });
    });
    
    
    group.position.y = -6;
    group.rotation.y = -Math.PI/2;
    group.scale.set(0,0,0);
    scene.add( group );

    $("#container").append(renderer.domElement);
}

function render(){
    
//    asdasdasd
//    asdasdasd
//    asdasdasd
//    asdasdasd
//    asdasdasd
    
}

function animate(){
    requestAnimationFrame(animate);
    
    controls.update();
    TWEEN.update();
    render();
    renderer.render(scene, camera);
}

function initAnimate(){
    
    new TWEEN.Tween( group.scale )
	.to({ x: 1, y : 1, z: 1 }, 2000)
    .easing(TWEEN.Easing.Exponential.Out)
    .delay(500)
	.start();
    
    new TWEEN.Tween( group.rotation )
	.to({ y : Math.PI }, 2000)
    .easing(TWEEN.Easing.Exponential.Out)
    .delay(500)
	.start();
    
}

$('.move-part').on( 'click', function (){
    
    var object = scene.getObjectByName( "top" );
    var object1 = scene.getObjectByName( "light" );
    
    new TWEEN.Tween( object.position )
	.to({ x: 5 }, 2000)
    .easing(TWEEN.Easing.Exponential.Out)
	.start();
    new TWEEN.Tween( object1.position )
	.to({ x: 5 }, 2000)
    .easing(TWEEN.Easing.Exponential.Out)
	.start();
    
});

$('#light-switch').on( 'click', function (){
    
    var object = scene.getObjectByName( "light" );
    var lightState = $(this).attr('state');
    
    if( lightState == 'off' ){
        object.material.emissive.setHex( 0xFFFFFF );
        $(this).attr('state', 'on');
    } else {
        object.material.emissive.setHex( 0x000000 ) ;
        $(this).attr('state', 'off');
    } 
    
});
init();
animate();

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}