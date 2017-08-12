var meshNameArray = ['top', 
                     'bottom', 
                     'light', 
                     'main_frame', 
                     'silver_clips', 
                     'wooden_trimmer', 
                     'rope', 
                     'stand_pads', 
                     'glass',
                     'adjacent_ropes',
                     'baza',
                     'main_rope',
                    ];
var models = [
    [
        _2238174 = {
            name: '2238174',
            light_source: 'lib/models/2238174/light_source.json',
            top: 'lib/models/2238174/top.json',
            bottom: 'lib/models/2238174/baza.json',
            texture: 'lib/models/2238174/topjpg.jpg',
            bumptexture: 'lib/models/2238174/pobrane.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .0001,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            } //end of section
        }
    ],
    [
        _2237174 = {
            name: '2237174',
            light_source: 'lib/models/2237174/light_source.json',
            top: 'lib/models/2237174/top.json',
            bottom: 'lib/models/2237174/baza.json',
            texture: 'lib/models/2237174/topjpg.jpg',
            bumptexture: 'lib/models/2237174/pobrane.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .0001,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            }

        }
    ],
    [
        _2246274 = {
            name: '2246274',
            light_source: 'lib/models/2246274/light_source.json',
            top: 'lib/models/2246274/top.json',
            bottom: 'lib/models/2246274/baza.json',
            texture: 'lib/models/2246274/topjpg.jpg',
            bumptexture: 'lib/models/2246274/pobrane.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .0001,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            } //end of section

        }
    ],
    [
        _2247474 = {
            name: '2247474',
            light_source: 'lib/models/2247474/light_source.json',
            top: 'lib/models/2247474/top.json',
            bottom: 'lib/models/2247474/baza.json',
            texture: 'lib/models/2247474/topjpg.jpg',
            bumptexture: 'lib/models/2247474/pobrane.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .0001,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            } //end of section

        }
    ],
    [
        _2246674 = {
            name: '2246674',
            light_source: 'lib/models/2246674/light_source.json',
            top: 'lib/models/2246674/top.json',
            bottom: 'lib/models/2246674/baza.json',
            texture: 'lib/models/2246674/topjpg.jpg',
            bumptexture: 'lib/models/2246674/pobrane.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .0001,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            } //end of section

        }
    ],
    [
        _2235174 = {
            name: '2235174',
            light_source: 'lib/models/2235174/light_source.json',
            top: 'lib/models/2235174/top.json',
            bottom: 'lib/models/2235174/baza.json',
            texture: 'lib/models/2235174/topjpg.jpg',
            bumptexture: 'lib/models/2235174/pobrane.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .0001,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            } //end of section

        }
    ],
    [
        _2366160 = {
            name: '2366160',
            light_source: 'lib/models/2366160/light_source.json',
            top: 'lib/models/2366160/top.json',
            bottom: 'lib/models/2366160/baza.json',
            texture: 'lib/models/2366160/texture.jpg',
            bumptexture: 'lib/models/2366160/textureNormal.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    normalMap: b,
                    bumpMap: b,
                    bumpScale: 1,
                    combine: THREE.MultiplyOperation
                });

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/dallas/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                var materialx = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    side: THREE.DoubleSide
                });


                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, materialx);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            } //end of section

        }
    ],
    [
        _2305136 = {
            name: '2305136',
            light_source: 'lib/models/2305136/light_source.json',
            top: 'lib/models/2305136/top.json',
            bottom: 'lib/models/2305136/baza.json',
            texture: 'lib/models/2305136/Plaster17_COL_VAR1_1K.jpg',
            bumptexture: 'lib/models/2305136/Plaster17_NRM_1K.jpg',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);


                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/dallas/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                var materialx = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    side: THREE.DoubleSide
                });

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, materialx);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.bottom, function (geo) {
                    var bottom = new THREE.Mesh(geo, mat);
                    bottom.material.needsUpdate = true;
                    bottom.position.set(0, 0, 0);
                    bottom.scale.set(mscale, mscale, mscale);
                    bottom.castShadow = true;
                    bottom.receiveShadow = true;
                    bottom.name = 'bottom';
                    group.add(bottom);

                });

            } //end of section

        }
    ],
    [
        _1209174 = {
            name: '1209174',
            light_source: 'lib/models/1209174/light_source.json',
            main_frame: 'lib/models/1209174/main_frame.json',
            silver_clips: 'lib/models/1209174/silver_clips.json',
            wooden_trimmer: 'lib/models/1209174/wooden_trimmer.json',
            rope: 'lib/models/1209174/rope.json',

            texture: 'lib/models/1209174/texture.jpg',
            bumptexture: 'lib/models/1209174/textureNormal.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);


                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/dallas/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                var materialx = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    side: THREE.DoubleSide
                });

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, materialx);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.main_frame, function (geo) {
                    var main_frame = new THREE.Mesh(geo, mat);
                    main_frame.material.needsUpdate = true;
                    main_frame.position.set(0, 0, 0);
                    main_frame.scale.set(mscale, mscale, mscale);
                    main_frame.castShadow = true;
                    main_frame.receiveShadow = true;
                    main_frame.name = 'main_frame';
                    group.add(main_frame);
                });
                loader.load(this.silver_clips, function (geo) {
                    var silver_clips = new THREE.Mesh(geo, materialx);
                    silver_clips.material.needsUpdate = true;
                    silver_clips.position.set(0, 0, 0);
                    silver_clips.scale.set(mscale, mscale, mscale);
                    silver_clips.castShadow = true;
                    silver_clips.receiveShadow = true;
                    silver_clips.name = 'silver_clips';
                    group.add(silver_clips);
                });
                loader.load(this.wooden_trimmer, function (geo) {
                    var wooden_trimmer = new THREE.Mesh(geo, mat);
                    wooden_trimmer.material.needsUpdate = true;
                    wooden_trimmer.position.set(0, 0, 0);
                    wooden_trimmer.scale.set(mscale, mscale, mscale);
                    wooden_trimmer.castShadow = true;
                    wooden_trimmer.receiveShadow = true;
                    wooden_trimmer.name = 'wooden_trimmer';
                    group.add(wooden_trimmer);
                });

            } //end of section

        }
    ],
    [
        _1109174 = {
            name: '1109174',
            light_source: 'lib/models/1109174/light_source.json',
            main_frame: 'lib/models/1109174/main_frame.json',
            stand_pads: 'lib/models/1109174/stand_pads.json',
            texture: 'lib/models/1109174/texture.jpg',
            bumptexture: 'lib/models/1109174/textureNormal.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/dallas/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                var materialx = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var matPad = new THREE.MeshBasicMaterial({
                    color: 0x222222,
                    side: THREE.DoubleSide
                });

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.stand_pads, function (geo) {
                    var stand_pads = new THREE.Mesh(geo, matPad);
                    stand_pads.material.needsUpdate = true;
                    stand_pads.position.set(0, 0, 0);
                    stand_pads.scale.set(mscale, mscale, mscale);
                    stand_pads.castShadow = true;
                    stand_pads.receiveShadow = true;
                    stand_pads.name = 'stand_pads';
                    group.add(stand_pads);
                });
                loader.load(this.main_frame, function (geo) {
                    var main_frame = new THREE.Mesh(geo, mat);
                    main_frame.material.needsUpdate = true;
                    main_frame.position.set(0, 0, 0);
                    main_frame.scale.set(mscale, mscale, mscale);
                    main_frame.castShadow = true;
                    main_frame.receiveShadow = true;
                    main_frame.name = 'main_frame';
                    group.add(main_frame);
                });

            } //end of section

        }
    ],
//    [
//
//        _allahu = {
//            name: 'glass test',
//
//            loadmodel: function () {
//
//                model_name.html(this.name);
//
//                var brag = new THREE.CubeTextureLoader()
//                    .setPath('lib/core/environment/dallas/dallas/')
//                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
//                brag.mapping = THREE.CubeRefractionMapping;
//
//                var materialx = new THREE.MeshBasicMaterial({
//                    color: 0xffffff,
//                    envMap: brag,
//                    refractionRatio: 0.95
//                });
//                var geometry = new THREE.SphereBufferGeometry(100, 32, 16);
//
//                var meshii = new THREE.Mesh(geometry, materialx);
//                meshii.scale.set(.12, .12, .12);
//                meshii.name = 'glass';
//
//                group.add(meshii);
//
//            }
//        }
//    ],
    [
        _1529174 = {
            name: '1529174',
            light_source: 'lib/models/1529174/light_source.json',
            baza: 'lib/models/1529174/baza.json',
            main_rope: 'lib/models/1529174/main_rope.json',
            adjacent_ropes: 'lib/models/1529174/adjacent_ropes.json',
            silver_clips: 'lib/models/1529174/silver_clips.json',
            
            texture: 'lib/models/1529174/texture.jpg',
            bumptexture: 'lib/models/1529174/textureNormal.png',
            matemissive: new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
                emissive: 0x000000
            }),

            loadmodel: function () {

                model_name.html(this.name);

                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/dallas/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                
                var matPad = new THREE.MeshBasicMaterial({
                    color: 0x222222,
                    side: THREE.DoubleSide
                });
                
                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });

                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                
                loader.load(this.baza, function (geo) {
                    var baza = new THREE.Mesh(geo, mat);
                    baza.material.needsUpdate = true;
                    baza.position.set(0, 0, 0);
                    baza.scale.set(mscale, mscale, mscale);
                    baza.castShadow = true;
                    baza.receiveShadow = true;
                    baza.name = 'baza';
                    group.add(baza);
                });
                loader.load(this.adjacent_ropes, function (geo) {
                    var adjacent_ropes = new THREE.Mesh(geo, matPad);
                    adjacent_ropes.material.needsUpdate = true;
                    adjacent_ropes.position.set(0, 0, 0);
                    adjacent_ropes.scale.set(mscale, mscale, mscale);
                    adjacent_ropes.castShadow = true;
                    adjacent_ropes.receiveShadow = true;
                    adjacent_ropes.name = 'adjacent_ropes';
                    group.add(adjacent_ropes);
                });
                loader.load(this.main_rope, function (geo) {
                    var main_rope = new THREE.Mesh(geo, matPad);
                    main_rope.material.needsUpdate = true;
                    main_rope.position.set(0, 0, 0);
                    main_rope.scale.set(mscale, mscale, mscale);
                    main_rope.castShadow = true;
                    main_rope.receiveShadow = true;
                    main_rope.name = 'main_rope';
                    group.add(main_rope);
                });
                loader.load(this.silver_clips, function (geo) {
                    var silver_clips = new THREE.Mesh(geo, silver_material);
                    silver_clips.material.needsUpdate = true;
                    silver_clips.position.set(0, 0, 0);
                    silver_clips.scale.set(mscale, mscale, mscale);
                    silver_clips.castShadow = true;
                    silver_clips.receiveShadow = true;
                    silver_clips.name = 'silver_clips';
                    group.add(silver_clips);
                });

            } //end of section

        }
    ]
]