var scene, camera, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, model;

var mscale = .5;

var loader = new THREE.JSONLoader();
var tx_loader = new THREE.TextureLoader();

var group = new THREE.Group();
var s1,s2,s3;

var top;

function init() {
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
    
    
    controls.minPolarAngle = - Math.PI/2;
    controls.maxPolarAngle = Math.PI/2;
    
    
    controls.addEventListener('change', render);

    camera.position.x = 15;
    camera.position.y = 20;
    camera.position.z = 15;
    camera.lookAt(scene.position);

    var light = new THREE.HemisphereLight( 0xffffff, 0x080820, .5 );
    scene.add( light );

    s1 = new THREE.SpotLight(0xffffff, 0.82);
    s1.position.set(-30, 10, 30);
    
    s1.castShadow = true;
    s1.shadowCameraVisible = true;
    s1.shadow.bias = - 0.001;
    s1.shadowCameraNear = .1;
    s1.shadowCameraFar = 100;
    s1.shadowCameraFov = 45;
    s1.shadowDarkness = .7;

    s1.shadowMapWidth = 1024;
    s1.shadowMapHeight = 1024;
    
    s1.name = 'spotlight 1';
    scene.add(s1);

    s2 = new THREE.SpotLight(0xffffff, 0.6);
    s2.position.set(30, 10, -80);
    s2.name = 'spotlight 2';
    scene.add(s2);
    
    s3 = new THREE.SpotLight(0xffffff, 0.6);
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
    scene.add(group);

    $("#container").append(renderer.domElement);
}

function render() {
//    group.rotation.y += 0.008;
}

function animate() {
    requestAnimationFrame(animate);
    
    controls.update();
    TWEEN.update();
    render();
    renderer.render(scene, camera);
}


function moveTop(){
    
    var object = scene.getObjectByName( "top" );
    
    new TWEEN.Tween(object.position)
	.to({ x: 5 }, 500)
    .easing(TWEEN.Easing.Exponential.Out)
	.start();
    
}

function switchLight(){
    
    var object = scene.getObjectByName( "light" );
    object.material.emissive.setHex( 0xFFFFFF );
    
//    new TWEEN.Tween(object.position)
//	.to({ x: 5 }, 500)
//    .easing(TWEEN.Easing.Exponential.Out)
//	.start();
    
}


init();
animate();

$(window).resize(function () {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
});