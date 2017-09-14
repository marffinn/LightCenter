var scene, camera, controls, renderer;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, sound;
var hidden_arrow_switch_number = 0;

var mscale = .4;

function deg(angle) {
    return angle * Math.PI / 180
};

function startLoad() {
    $('.loadBar').css({'width': 0 + '%'});
};

function endLoad() {
    $('.loadBar').css({'width': 0 + '%', 'display': 'none' });
};

var manager = new THREE.LoadingManager();
manager.onStart = function () {
    startLoad();
}
manager.onProgress = function (item, loaded, total) {
    var loadedBar = (loaded / total * 100);
    var divi = loadedBar / 100;
    $('.loadBar').css({'width': loadedBar + '%'});
}
manager.onLoad = function () {
    endLoad();
}

var loader = new THREE.JSONLoader(manager);
var tx_loader = new THREE.TextureLoader(manager);

var group = new THREE.Group();
group.name = 'Model Lampy';

function init() {
    
    scene = new THREE.Scene();
    scene.name = 'SCENE SPOT LIGHT';
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.x = 25;
    camera.position.y = 15;
    camera.position.z = 25;
    camera.lookAt(scene.position);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.dampingFactor = 0.15;
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.minDistance = 10;
    controls.maxDistance = 80;
    controls.addEventListener('change', render);    

    var ambient = new THREE.AmbientLight(0xffffff, .8);
    ambient.name = 'AmbientLight';
    scene.add(ambient);

    var light = new THREE.PointLight(0xffffff, 0.65);
    light.position.set(25,15,25);
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.castShadow = true;
    light.name = 'PointLight';
    scene.add(light);

    var light2 = new THREE.PointLight(0xffffff, 0.65);
    light2.position.set(-25,-15,-25);
    light2.name = 'PointLight 2';
    scene.add(light2);  

    group.position.y = -6;
    group.rotation.y = -Math.PI / 2;
    group.scale.set(.01, .01, .01);
    scene.add(group);

    $("#container").append(renderer.domElement);
}

function render() {}

function animate() {
    
    group.rotation.y += 0.004;
    
    requestAnimationFrame(animate);
    controls.update();
    TWEEN.update();
    render();
    renderer.render(scene, camera);
}

init();
animate();

var model_name = $('.model_name');
var model_link = $('.model_name a')

function mn_reposition() {
    var mn_width = model_name.outerWidth() / 2;
    model_name.css({
        'margin-left': -mn_width
    });
}

function removeGroupConrtents(){
    for (var i = 0; i <= meshNameArray.length; i++) {
        var item = scene.getObjectByName(meshNameArray[i]);
        group.remove(item);
    }
}

function animIn( model_no ) {
    
    removeGroupConrtents();
    

    models[model_no][0].loadmodel();    // loading model from driver.js array
    mn_reposition();                    // reposition red model name bar in bottom of the page
    models[model_no][0].modposi();      // position and scale group

}

$('#light-switch').on('click', function () {

    var object = scene.getObjectByName("light");
    var lightState = $(this).attr('state');

    if (lightState == 'off') {
        object.material.emissive.setHex(0xFFFF00);
        $(this).attr('state', 'on');
    } else {
        object.material.emissive.setHex(0x000000);
        $(this).attr('state', 'off');
    }

});

$('.fullscreen_container').on('click', function () {


    var state = $(this).attr('state');

    if (state == 'on') {
        THREEx.FullScreen.cancel();
        $(this).attr('state', 'off');
    } else {
        THREEx.FullScreen.request();
        $(this).attr('state', 'on');
    }

});


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);