var scene, camera, controls, renderer;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, sound;

var mscale = .5;

function deg(angle) {
    return angle * Math.PI / 180
};
var rr = deg(90);
var lcg = new THREE.PlaneGeometry(20, 20, 1);
var lgm = new THREE.MeshPhongMaterial({
    color: 0xf0e928
});
var loadCube = new THREE.Mesh(lcg, lgm);
loadCube.scale.set(.001, .001, .001);
loadCube.position.y = -6;
loadCube.rotation.x = -rr;

function startLoad() {

    scene.add(loadCube);

};

function endLoad() {

    new TWEEN.Tween(loadCube.scale)
        .to({
            x: .001,
            y: .001,
            z: .001
        }, 1000)
        .onComplete( killLoad )
        .start();

};
function killLoad(){
    scene.remove(loadCube);
}

var manager = new THREE.LoadingManager();
manager.onStart = function () {
    startLoad();
}
manager.onProgress = function (item, loaded, total) {

    var loadedBar = (loaded / total * 100);
    var divi = loadedBar / 100;
    new TWEEN.Tween(loadCube.scale)
        .to({
            x: divi,
            y: divi,
            z: divi
        }, 500)
        .easing(TWEEN.Easing.Exponential.Out)
        .start();


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
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.dampingFactor = 0.15;
    controls.enableDamping = true;
    controls.enablePan = false;

    var listener = new THREE.AudioListener();
    camera.add(listener);
    sound = new THREE.Audio(listener);

    var audioLoader = new THREE.AudioLoader( manager );
    audioLoader.load('lib/music/lopo.wav', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.2);
        sound.play();
    });

    click = new THREE.Audio(listener);

    audioLoader.load('lib/music/click.wav', function (buffer) {
        click.setBuffer(buffer);
        click.setVolume(1);
    });

    //    controls.minPolarAngle = -Math.PI / 2;
    //    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.addEventListener('change', render);

    camera.position.x = 25;
    camera.position.y = 15;
    camera.position.z = 25;
    camera.lookAt(scene.position);

    var light = new THREE.HemisphereLight(0xfcf0cd, 0x080820, .58);
    light.name = 'hemisphere';
    scene.add(light);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.26);
    directionalLight.position.set(-10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.name = 'Directional Light';
    scene.add(directionalLight);

    var s1 = new THREE.SpotLight(0xffffff, 0.8);
    s1.position.set(-30, 10, 30);
    s1.castShadow = true;
    s1.shadow.bias = -0.001;
    s1.shadow.camera.near = .1;
    s1.shadow.camera.far = 100;
    s1.shadow.camera.fov = 45;
    s1.shadow.angle = 1.05;
    s1.shadow.mapSize.width = 2048;
    s1.shadow.mapSize.height = 2048;
    s1.name = 'spotlight 1';
    scene.add(s1);

    var s2 = new THREE.SpotLight(0xffffff, 0.46);
    s2.position.set(30, 10, -80);
    s2.name = 'spotlight 2';
    scene.add(s2);

    var gridHelper = new THREE.GridHelper(10, 5);
    gridHelper.name = 'Grid Helper';
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    var txmap = new THREE.TextureLoader().load('lib/models/TEXTURES/topjpg.jpg');
    var bmmap = new THREE.TextureLoader().load('lib/models/TEXTURES/pobrane.png');

    var mat = new THREE.MeshPhongMaterial({
        map: txmap,
        bumpMap: bmmap,
        shininess: 5,
        reflectivity: 5,
        bumpScale: 0.01,
        combine: THREE.MultiplyOperation
    });

    loader.load('lib/models/2238174/top.json', function (geo) {
        var top = new THREE.Mesh(geo, mat);
        top.material.needsUpdate = true;
        top.position.set(0, 0, 0);
        top.scale.set(mscale, mscale, mscale);
        top.castShadow = true;
        top.receiveShadow = true;
        top.name = 'top';
        group.add(top);
    });

    loader.load('lib/models/2238174/baza.json', function (geo) {
        var bottom = new THREE.Mesh(geo, mat);
        bottom.material.needsUpdate = true;
        bottom.position.set(0, 0, 0);
        bottom.scale.set(mscale, mscale, mscale);
        bottom.castShadow = true;
        bottom.receiveShadow = true;
        bottom.name = 'bottom';
        group.add(bottom);

    });

    var matemissive = new THREE.MeshPhongMaterial({
        color: 0xa3a3a3,
        emissive: 0x000000
    });

    loader.load('lib/models/2238174/light_source.json', function (geo) {
        var light_source = new THREE.Mesh(geo, matemissive);
        light_source.material.needsUpdate = true;
        light_source.position.set(0, 0, 0);
        light_source.scale.set(mscale, mscale, mscale);
        light_source.name = 'light';
        group.add(light_source);
    });

    group.position.y = -6;
    group.rotation.y = -Math.PI / 2;
    group.scale.set(.01, .01, .01);
    scene.add(group);

    $("#container").append(renderer.domElement);
}

function render() {}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    TWEEN.update();
    render();
    renderer.render(scene, camera);
}

function initAnimate(s) {

    new TWEEN.Tween(group.scale)
        .to({
            x: s,
            y: s,
            z: s
        }, 2000)
        .easing(TWEEN.Easing.Exponential.Out)
        .delay(500)
        .start();

    new TWEEN.Tween(group.rotation)
        .to({
            y: Math.PI
        }, 2000)
        .easing(TWEEN.Easing.Exponential.Out)
        .delay(500)
        .start();

}

init();
animate();

var currentIndex = 0;
var modelsCount = models.length - 1;
var currentModel = 0;

$('.prev_model').on('click', function () {
    click.play();
    if (currentModel == 0) {
        currentModel = modelsCount;
        loadNew();
    } else {
        currentModel -= 1;
        loadNew();
    }
});

$('.next_model').on('click', function () {
    click.play();
    if (currentModel == modelsCount) {
        currentModel = 0;
        loadNew();
    } else {
        currentModel += 1;
        loadNew();
    }

});

function animIn() {

    var m_top = scene.getObjectByName("top");
    var m_bottom = scene.getObjectByName("bottom");
    var m_light = scene.getObjectByName("light");
    group.remove(m_top, m_bottom, m_light);

    models[currentModel][0].loadmodel();

    new TWEEN.Tween(group.scale)
        .to({
            x: 1,
            y: 1,
            z: 1
        }, 500)
        .easing(TWEEN.Easing.Exponential.Out)
        .start();
    new TWEEN.Tween(group.rotation)
        .to({
            y: Math.PI
        }, 500)
        .easing(TWEEN.Easing.Exponential.Out)
        .start();

}

function loadNew(model) {
    new TWEEN.Tween(group.scale)
        .to({
            x: .1,
            y: .1,
            z: .1
        }, 500)
        .easing(TWEEN.Easing.Exponential.Out)
        .start();

    new TWEEN.Tween(group.rotation)
        .to({
            y: -Math.PI
        }, 500)
        .easing(TWEEN.Easing.Exponential.Out)
        .onComplete(animIn)
        .start();
}

$('#light-switch').on('click', function () {

    var object = scene.getObjectByName("light");
    var lightState = $(this).attr('state');

    if (lightState == 'off') {
        object.material.emissive.setHex(0xFFFFFF);
        $(this).attr('state', 'on');
    } else {
        object.material.emissive.setHex(0x000000);
        $(this).attr('state', 'off');
    }

});

$('.fullscreen_container').on('click', function () {

    var m_pathOn = 'lib/music/on.svg';
    var m_pathOff = 'lib/music/off.svg';
    var state = $(this).attr('state');

    if (state == 'on') {
        THREEx.FullScreen.cancel();
        $(this).attr('state', 'off');
    } else {
        THREEx.FullScreen.request();
        $(this).attr('state', 'on');
    }

});

$('.volume_container').on('click', function () {

    var m_pathOn = 'lib/music/on.svg';
    var m_pathOff = 'lib/music/off.svg';
    var state = $(this).attr('state');

    if (state == 'on') {
        sound.pause();
        $(this).children('img').attr('src', m_pathOff);
        $(this).attr('state', 'off');
    } else {
        sound.play();
        $(this).children('img').attr('src', m_pathOn);
        $(this).attr('state', 'on');
    }

});

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);