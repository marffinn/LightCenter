var meshNameArray = [
    'top', 
    'bottom', 
    'light', 
    'main_frame', 
    'silver_clips', 
    'silver_caps', 
    'wooden_trimmer', 
    'rope', 
    'stand_pads', 
    'glass',
    'glass_panels',
    'adjacent_ropes',
    'baza',
    'base_knots',
    'light_bulb',
    'main_rope'
];

var textures = {
        texture: 'lib/models/TEXTURES/texture.jpg',
        texturebiel: 'lib/models/TEXTURES/texturebiel.jpg',
        bumptexture: 'lib/models/TEXTURES/textureNormal.png',
        linen: 'lib/models/TEXTURES/linen.jpg',
        linenbiel: 'lib/models/TEXTURES/linenbiel.jpg',
        jasna: 'lib/models/TEXTURES/jasna.png', 
        topper: 'lib/models/TEXTURES/topper.jpg',
        topperbrown: 'lib/models/TEXTURES/topper_brown.jpg',
        
        topdense: 'lib/models/TEXTURES/top_dense.jpg',
        topdensebrown: 'lib/models/TEXTURES/top_dense_brown.jpg',
    
        pilne: 'lib/models/TEXTURES/pilne.jpg',
        pilnebrown: 'lib/models/TEXTURES/pilne_brown.jpg',
    
        plaster: 'lib/models/TEXTURES/plaster.jpg',
        plasternormal: 'lib/models/TEXTURES/plasterNormal.jpg',
    
        matemissive: new THREE.MeshPhongMaterial({ color: 0xa3a3a3, emissive: 0x000000 }),
        red_rope: new THREE.MeshPhongMaterial({ color: 0xFF2D00})
}

var models = [
    [
        _2238174 = {
            name: 'Spot Light kinkiet Linus LED 2238174',
            link: 'https://lightcenter.pl/katalog,22190/spot-light-kinkiet-linus-led-2238174',
            light_source: 'lib/models/2238174/light_source.json',
            top: 'lib/models/2238174/top.json',
            bottom: 'lib/models/2238174/baza.json',
            scala:              1,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
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
        _2237174 = {
            name: 'Spot Light kinkiet Linus LED 2237174',
            link: 'https://lightcenter.pl/katalog,22157/spot-light-kinkiet-linus-led-2237174',
            light_source: 'lib/models/2237174/light_source.json',
            top: 'lib/models/2237174/top.json',
            bottom: 'lib/models/2237174/baza.json',
            scala:              1,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
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
            name: 'Lampa sufitowa Linus LED 2246274 Spot Light',
            link: 'https://lightcenter.pl/katalog,22469/lampa-sufitowa-linus-led-2246274-spot-light',
            light_source: 'lib/models/2246274/light_source.json',
            top: 'lib/models/2246274/top.json',
            bottom: 'lib/models/2246274/baza.json',
            scala:              1,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
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
        _2247474 = {
            name: 'Lampa sufitowa Linus LED 2246474 Spot Light',
            link: 'https://lightcenter.pl/katalog,22470/lampa-sufitowa-linus-led-2246474-spot-light',
            light_source: 'lib/models/2247474/light_source.json',
            top: 'lib/models/2247474/top.json',
            bottom: 'lib/models/2247474/baza.json',
            scala:              1,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
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
        _2246674 = {
            name: 'Lampa sufitowa Linus LED 2246674 Spot Light',
            link: 'https://lightcenter.pl/katalog,22471/lampa-sufitowa-linus-led-2246674-spot-light',
            light_source: 'lib/models/2246674/light_source.json',
            top: 'lib/models/2246674/top.json',
            bottom: 'lib/models/2246674/baza.json',
            scala:              1,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
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
        _2235174 = {
            name: 'Spot Light kinkiet Trekant LED 2235174',
            link: 'https://lightcenter.pl/katalog,22156/spot-light-kinkiet-trekant-led-2235174',
            light_source: 'lib/models/2235174/light_source.json',
            top: 'lib/models/2235174/top.json',
            bottom: 'lib/models/2235174/baza.json',
            scala:              1,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
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
        _2366160 = {
            name: 'Oczko sufitowe Wooddream LED 2366160 Spot Light',
            link: 'https://lightcenter.pl/katalog,22681/oczko-sufitowe-wooddream-led-2366160-spot-light',
            light_source: 'lib/models/2366160/light_source.json',
            top: 'lib/models/2366160/top.json',
            bottom: 'lib/models/2366160/baza.json',
            scala:              1.5,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
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
                    .setPath('lib/core/environment/yokohama/')
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

            }

        }
    ],
    [
        _2305136 = {
            name: 'Oczko sufitowe Ledsdream LED 2305136 Spot Light',
            link: 'https://lightcenter.pl/katalog,22705/oczko-sufitowe-ledsdream-led-2305136-spot-light',
            light_source: 'lib/models/2305136/light_source.json',
            top: 'lib/models/2305136/top.json',
            bottom: 'lib/models/2305136/baza.json',
            scala:              1,
            posiy:             -6,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.plaster;
                var b = textures.plasternormal;
                var e = textures.matemissive;
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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

            }

        }
    ],
    [
        _1209174 = {
            name: 'Lampa wisząca Trigonon LED 1209174 Spot Light',
            link: 'https://lightcenter.pl/katalog,22421/lampa-wiszaca-trigonon-led-1209174-spot-light',
            light_source: 'lib/models/1209174/light_source.json',
            main_frame: 'lib/models/1209174/main_frame.json',
            silver_clips: 'lib/models/1209174/silver_clips.json',
            wooden_trimmer: 'lib/models/1209174/wooden_trimmer.json',
            rope: 'lib/models/1209174/rope.json',
            scala:              .5,
            posiy:             -10,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var tx = tx_loader.load(t);
                var rr = textures.red_rope;

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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
                    var rope = new THREE.Mesh(geo, rr);
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

            }

        }
    ],
    [
        _1109174 = {
            name: 'Lampa stołowa Trigonon LED 1109174 Spot Light',
            link: 'https://lightcenter.pl/katalog,22422/lampa-stolowa-trigonon-led-1109174-spot-light',
            light_source: 'lib/models/1109174/light_source.json',
            main_frame: 'lib/models/1109174/main_frame.json',
            stand_pads: 'lib/models/1109174/stand_pads.json',
            scala:              1,
            posiy:             -7,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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
                    bumpScale: .0005,
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

            }

        }
    ],
    [
        _1529174 = {
            name: 'Lampa wisząca Leif LED 1529174 Spot Light',
            link: 'https://lightcenter.pl/katalog,22700/lampa-wiszaca-leif-led-1529174-spot-light',
            light_source: 'lib/models/1529174/light_source.json',
            baza: 'lib/models/1529174/baza.json',
            main_rope: 'lib/models/1529174/main_rope.json',
            adjacent_ropes: 'lib/models/1529174/adjacent_ropes.json',
            silver_clips: 'lib/models/1529174/silver_clips.json',
            scala:              0.4,
            posiy:              -13,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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

            }

        }
    ],
    [
        _1509774 = {
            name: 'Lampa wisząca Smal LED 1509774 Spot Light',
            link: 'https://lightcenter.pl/katalog,22683/lampa-wiszaca-smal-led-1509774-spot-light',
            light_source: 'lib/models/1509774/light_source.json',
            baza: 'lib/models/1509774/baza.json',
            rope: 'lib/models/1509774/rope.json',
            silver_caps: 'lib/models/1509774/silver_caps.json',
            scala:              0.6,
            posiy:              -7,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, matPad);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.silver_caps, function (geo) {
                    var silver_caps = new THREE.Mesh(geo, silver_material);
                    silver_caps.material.needsUpdate = true;
                    silver_caps.position.set(0, 0, 0);
                    silver_caps.scale.set(mscale, mscale, mscale);
                    silver_caps.castShadow = true;
                    silver_caps.receiveShadow = true;
                    silver_caps.name = 'silver_caps';
                    group.add(silver_caps);
                });

            }

        }
    ],
    [
        _1519674 = {
            name: 'Lampa wisząca Smal LED 1519674 Spot Light',
            link: 'https://lightcenter.pl/katalog,22691/lampa-wiszaca-smal-led-1519674-spot-light',
            light_source: 'lib/models/1519674/light_source.json',
            baza: 'lib/models/1519674/baza.json',
            rope: 'lib/models/1519674/rope.json',
            silver_caps: 'lib/models/1519674/silver_caps.json',
            scala:              0.6,
            posiy:              -7,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, matPad);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.silver_caps, function (geo) {
                    var silver_caps = new THREE.Mesh(geo, silver_material);
                    silver_caps.material.needsUpdate = true;
                    silver_caps.position.set(0, 0, 0);
                    silver_caps.scale.set(mscale, mscale, mscale);
                    silver_caps.castShadow = true;
                    silver_caps.receiveShadow = true;
                    silver_caps.name = 'silver_caps';
                    group.add(silver_caps);
                });

            }

        }
    ],
    [
        _1519174 = {
            name: 'Lampa wisząca Legno LED 1519174 Spot Light',
            link: 'https://lightcenter.pl/katalog,22686/lampa-wiszaca-legno-led-1519174-spot-light',
            light_source: 'lib/models/1519174/light_source.json',
            baza: 'lib/models/1519174/baza.json',
            main_frame: 'lib/models/1519174/main_frame.json',
            rope: 'lib/models/1519174/rope.json',
            silver_clips: 'lib/models/1519174/silver_clips.json',
            scala:              0.6,
            posiy:              -7,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, matPad);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
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

            }

        }
    ],
    [
        _1519274 = {
            name: 'Lampa wisząca Legno LED 1519274 Spot Light',
            link:'https://lightcenter.pl/katalog,22687/lampa-wiszaca-legno-led-1519274-spot-light',
            light_source: 'lib/models/1519274/light_source.json',
            baza: 'lib/models/1519274/baza.json',
            main_frame: 'lib/models/1519274/main_frame.json',
            rope: 'lib/models/1519274/rope.json',
            silver_clips: 'lib/models/1519274/silver_clips.json',
            scala:              0.5,
            posiy:              -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>'
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, matPad);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
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

            }

        }
    ],
    [
        _7161174 = {
            name: 'Lampa wisząca Trongo 7161174 Spot Light',
            link: 'https://www.lightcenter.pl/katalog,22424/lampa-wiszaca-trongo-7161174-spot-light',
            light_source: 'lib/models/7161174/light_source.json',
            light_bulb: 'lib/models/7161174/light_bulb.json',
            baza: 'lib/models/7161174/baza.json',
            main_frame: 'lib/models/7161174/main_frame.json',
            rope: 'lib/models/7161174/rope.json',
            silver_clips: 'lib/models/7161174/silver_clips.json',
            scala:              0.8,
            posiy:              -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.2,
                    transparent: true,
                    opacity: .2,
                    specular: 0xffffff,
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
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

            }

        }
    ],
    [
        _7061174 = {
            name: 'Lampa wisząca Trongo 7061174 Spot Light',
            link: 'https://lightcenter.pl/katalog,22423/lampa-wiszaca-trongo-7061174-spot-light',
            light_source: 'lib/models/7061174/light_source.json',
            light_bulb: 'lib/models/7061174/light_bulb.json',
            baza: 'lib/models/7061174/baza.json',
            main_frame: 'lib/models/7061174/main_frame.json',
            rope: 'lib/models/7061174/rope.json',
            silver_clips: 'lib/models/7061174/silver_clips.json',
            scala:              0.8,
            posiy:              -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                var tx = tx_loader.load(t);

                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
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
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.2,
                    transparent: true,
                    opacity: .2,
                    specular: 0xffffff,
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
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

            }

        }
    ],
    [
        _2130274 = {
            name: 'Lampa sufitowa Neele LED 2130274 Spot Light',
            link: 'https://lightcenter.pl/katalog,22750/lampa-sufitowa-neele-led-2130274-spot-light',
            light_source: 'lib/models/2130274/light_source.json',
            main_frame: 'lib/models/2130274/main_frame.json',
            scala:              .9,
            posiy:              -5,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var tx = tx_loader.load(t);

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

            }

        }
    ],
    [
        _2130374 = {
            name: 'Lampa sufitowa Neele LED 2130374 Spot Light',
            link: 'https://lightcenter.pl/katalog,22751/lampa-sufitowa-neele-led-2130374-spot-light',
            light_source: 'lib/models/2130374/light_source.json',
            main_frame: 'lib/models/2130374/main_frame.json',
            scala:              0.9,
            posiy:              -4,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
                var tx = tx_loader.load(t);

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

            }

        }
    ],
    [
        _2285274 = {
            name: 'Lampa sufitowa Julka 2285274 Spot Light',
            link: 'https://lightcenter.pl/katalog,22715/lampa-sufitowa-julka-2285274-spot-light',
            light_source: 'lib/models/2285274/light_source.json',
            main_frame: 'lib/models/2285274/main_frame.json',
            silver_clips: 'lib/models/2285274/silver_clips.json',
            light_bulb: 'lib/models/2285274/light_bulb.json',
            glass_panels: 'lib/models/2285274/glass_panels.json',
            base_knots: 'lib/models/2285274/base_knots.json',
            scala:              0.9,
            posiy:              -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },

            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                
                var tx = tx_loader.load(t);

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.95,
                    transparent: true,
                    opacity: .58,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                    var silver_clips = new THREE.Mesh(geo, silver_material);
                    silver_clips.material.needsUpdate = true;
                    silver_clips.position.set(0, 0, 0);
                    silver_clips.scale.set(mscale, mscale, mscale);
                    silver_clips.castShadow = true;
                    silver_clips.receiveShadow = true;
                    silver_clips.name = 'silver_clips';
                    group.add(silver_clips);
                });
                loader.load(this.base_knots, function (geo) {
                    var base_knots = new THREE.Mesh(geo, mat);
                    base_knots.material.needsUpdate = true;
                    base_knots.position.set(0, 0, 0);
                    base_knots.scale.set(mscale, mscale, mscale);
                    base_knots.castShadow = true;
                    base_knots.receiveShadow = true;
                    base_knots.name = 'base_knots';
                    group.add(base_knots);
                });
                loader.load(this.glass_panels, function (geo) {
                    var glass_panels = new THREE.Mesh(geo, matBulb);
                    glass_panels.material.needsUpdate = true;
                    glass_panels.position.set(0, 0, 0);
                    glass_panels.scale.set(mscale, mscale, mscale);
                    glass_panels.castShadow = true;
                    glass_panels.receiveShadow = true;
                    glass_panels.name = 'glass_panels';
                    group.add(glass_panels);
                });

            }

        }
    ],
    [
        _2285474 = {
            name: 'Lampa sufitowa Julka 2285474 Spot Light',
            link:'https://lightcenter.pl/katalog,22717/lampa-sufitowa-julka-2285474-spot-light',
            light_source: 'lib/models/2285474/light_source.json',
            main_frame: 'lib/models/2285474/main_frame.json',
            silver_clips: 'lib/models/2285474/silver_clips.json',
            light_bulb: 'lib/models/2285474/light_bulb.json',
            glass_panels: 'lib/models/2285474/glass_panels.json',
            base_knots: 'lib/models/2285474/base_knots.json',
            scala:              0.85,
            posiy:              -5,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var tx = tx_loader.load(t);

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.95,
                    transparent: true,
                    opacity: .58,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                    var silver_clips = new THREE.Mesh(geo, silver_material);
                    silver_clips.material.needsUpdate = true;
                    silver_clips.position.set(0, 0, 0);
                    silver_clips.scale.set(mscale, mscale, mscale);
                    silver_clips.castShadow = true;
                    silver_clips.receiveShadow = true;
                    silver_clips.name = 'silver_clips';
                    group.add(silver_clips);
                });
                loader.load(this.base_knots, function (geo) {
                    var base_knots = new THREE.Mesh(geo, mat);
                    base_knots.material.needsUpdate = true;
                    base_knots.position.set(0, 0, 0);
                    base_knots.scale.set(mscale, mscale, mscale);
                    base_knots.castShadow = true;
                    base_knots.receiveShadow = true;
                    base_knots.name = 'base_knots';
                    group.add(base_knots);
                });
                loader.load(this.glass_panels, function (geo) {
                    var glass_panels = new THREE.Mesh(geo, matBulb);
                    glass_panels.material.needsUpdate = true;
                    glass_panels.position.set(0, 0, 0);
                    glass_panels.scale.set(mscale, mscale, mscale);
                    glass_panels.castShadow = true;
                    glass_panels.receiveShadow = true;
                    glass_panels.name = 'glass_panels';
                    group.add(glass_panels);
                });

            }

        }
    ],
    [
        _6310774A0836 = {
            name: 'Lampa stołowa Madeleine 6310174 Spot Light',
            link: 'https://www.lightcenter.pl/katalog,24052/lampa-stolowa-madeleine-6310174-spot-light',
            
            light_source:       'lib/models/6310774A0836/light_source.json',
            baza:               'lib/models/6310774A0836/baza.json',
            silver_clips:       'lib/models/6310774A0836/silver_clips.json',
            light_bulb:         'lib/models/6310774A0836/light_bulb.json',
            top:                'lib/models/6310774A0836/top.json',
            top_inside:         'lib/models/6310774A0836/top_inside.json',
            rope:               'lib/models/6310774A0836/rope.json',
            legs:               'lib/models/6310774A0836/legs.json',
            scala:              0.5,
            posiy:              -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.jasna;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0xf2f2f2,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ],
    [
        _6220774A0837 = {
            name: 'Lampa podłogowa Amina 6220132 Spot Light',
            link: 'https://www.lightcenter.pl/katalog,23483/lampa-podlogowa-amina-6220132-spot-light',
            
            light_source:       'lib/models/6220774A0837/light_source.json',
            baza:               'lib/models/6220774A0837/baza.json',
            silver_clips:       'lib/models/6220774A0837/silver_clips.json',
            light_bulb:         'lib/models/6220774A0837/light_bulb.json',
            top:                'lib/models/6220774A0837/top.json',
            top_inside:         'lib/models/6220774A0837/top_inside.json',
            rope:               'lib/models/6220774A0837/rope.json',
            legs:               'lib/models/6220774A0837/legs.json',
            scala:              0.3,
            posiy:              -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                
                
                var t = textures.texturebiel;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.jasna;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0xf2f2f2,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });
                

            }

        }
    ],
    [
        _6220174A0837 = {
            name: 'Lampa podłogowa Amina 6220174 Spot Light',
            link: 'https://www.lightcenter.pl/katalog,23489/lampa-podlogowa-amina-6220174-spot-light',
            
            light_source:       'lib/models/6220174A0837/light_source.json',
            baza:               'lib/models/6220174A0837/baza.json',
            silver_clips:       'lib/models/6220174A0837/silver_clips.json',
            light_bulb:         'lib/models/6220174A0837/light_bulb.json',
            top:                'lib/models/6220174A0837/top.json',
            top_inside:         'lib/models/6220174A0837/top_inside.json',
            rope:               'lib/models/6220174A0837/rope.json',
            legs:               'lib/models/6220174A0837/legs.json',
            scala:              0.3,
            posiy:             -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                
                
                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.jasna;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0xf2f2f2,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });
                

            }

        }
    ],
    [
        _6830174A0832 = {
            name: 'Lampa stołowa Estella 6830174A0832 Spot Light',
            link: 'https://www.lightcenter.pl/katalog,23392/lampa-stolowa-estella-6830174a0832-spot-light',
            
            light_source:       'lib/models/6830174A0832/light_source.json',
            baza:               'lib/models/6830174A0832/baza.json',
            silver_clips:       'lib/models/6830174A0832/silver_clips.json',
            light_bulb:         'lib/models/6830174A0832/light_bulb.json',
            top:                'lib/models/6830174A0832/top.json',
            rope:               'lib/models/6830174A0832/rope.json',
            legs:               'lib/models/6830174A0832/legs.json',
            scala:              0.6,
            posiy:             -7,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                
                
                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.jasna;
                var jx = tx_loader.load(jas);
                
                var lin = textures.linenbiel;
                var lx = tx_loader.load(lin);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                
                var abazin = new THREE.MeshPhongMaterial({
                    map: lx,
                    shininess: 0,
                    reflectivity: 0,
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abazin);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                

            }

        }
    ],
    [
        _6830874A0834 = {
            name: 'Lampa stołowa Estella 6830874A0834 Spot Light',
            link: 'https://www.lightcenter.pl/katalog,24113/lampa-stolowa-estella-6830874a0834-spot-light',
            
            light_source:       'lib/models/6830174A0832/light_source.json',
            baza:               'lib/models/6830174A0832/baza.json',
            silver_clips:       'lib/models/6830174A0832/silver_clips.json',
            light_bulb:         'lib/models/6830174A0832/light_bulb.json',
            top:                'lib/models/6830174A0832/top.json',
            rope:               'lib/models/6830174A0832/rope.json',
            legs:               'lib/models/6830174A0832/legs.json',
            scala:              0.6,
            posiy:             -7,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                
                
                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.jasna;
                var jx = tx_loader.load(jas);
                
                var lin = textures.linen;
                var lx = tx_loader.load(lin);

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                
                var abazin = new THREE.MeshPhongMaterial({
                    map: lx,
                    shininess: 0,
                    reflectivity: 0,
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abazin);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                

            }

        }
    ],
    [
        _9776136 = {
            name: 'Lampa wisząca Amory 9776136 Spot Light',
            link: 'https://www.lightcenter.pl/katalog,24122/lampa-wiszaca-amory-9776136-spot-light',
            
            light_source:       'lib/models/9776136/light_source.json',
            baza:               'lib/models/9776136/baza.json',
            silver_clips:       'lib/models/9776136/silver_clips.json',
            light_bulb:         'lib/models/9776136/light_bulb.json',
            top:                'lib/models/9776136/top.json',
            rope:               'lib/models/9776136/rope.json',
            scala:              0.8,
            posiy:             -16,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                
                
                var t = textures.plaster;
                var tx = tx_loader.load(t);
                
                var b = textures.plasternormal;
                var e = textures.matemissive;
                var rr = textures.red_rope;

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
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
                

            }

        }
    ],
    [
        _6310132A0840 = {
            name: 'Lampa stołowa Madeleine 6310132A0840 Spot Light',
            link: 'https://lightcenter.pl/katalog,24051/lampa-stolowa-madeleine-6310132a0840-spot-light',
            
            light_source:       'lib/models/6310774A0836/light_source.json',
            baza:               'lib/models/6310774A0836/baza.json',
            silver_clips:       'lib/models/6310774A0836/silver_clips.json',
            light_bulb:         'lib/models/6310774A0836/light_bulb.json',
            top:                'lib/models/6310774A0836/top.json',
            top_inside:         'lib/models/6310774A0836/top_inside.json',
            rope:               'lib/models/6310774A0836/rope.json',
            legs:               'lib/models/6310774A0836/legs.json',
            scala:              0.5,
            posiy:              -9,
            
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texturebiel;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.jasna;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0xf2f2f2,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
                });
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ],
    [
        _6470874A0833 = {
            name: 'Lampa podłogowa Estella 6740874A0833 Spot Light',
            link: 'https://lightcenter.pl/katalog,24115/lampa-podlogowa-estella-6740874a0833-spot-light',
            
            light_source:       'lib/models/6470874A0833/light_source.json',
            baza:               'lib/models/6470874A0833/baza.json',
            silver_clips:       'lib/models/6470874A0833/silver_clips.json',
            light_bulb:         'lib/models/6470874A0833/light_bulb.json',
            top:                'lib/models/6470874A0833/top.json',
            top_inside:         'lib/models/6470874A0833/top_inside.json',
            rope:               'lib/models/6470874A0833/rope.json',
            legs:               'lib/models/6470874A0833/legs.json',
            scala:              0.35,
            posiy:             -18,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.linenbiel;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });

            }

        }
    ],
    [
        _6470874A0835 = {
            name: 'Lampa podłogowa Estella 6740874A0835 Spot Light',
            link: 'https://lightcenter.pl/katalog,24119/lampa-podlogowa-estella-6740874a0835-spot-light',
            
            light_source:       'lib/models/6470874A0833/light_source.json',
            baza:               'lib/models/6470874A0833/baza.json',
            silver_clips:       'lib/models/6470874A0833/silver_clips.json',
            light_bulb:         'lib/models/6470874A0833/light_bulb.json',
            top:                'lib/models/6470874A0833/top.json',
            top_inside:         'lib/models/6470874A0833/top_inside.json',
            rope:               'lib/models/6470874A0833/rope.json',
            legs:               'lib/models/6470874A0833/legs.json',
            scala:              0.35,
            posiy:             -18,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.linen;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
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
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });

            }

        }
    ],
    [
        _6420874A0963 = {
            name: 'Lampa podłogowa Estella 6740874A0835 Spot Light',
            link: 'https://lightcenter.pl/katalog,24119/lampa-podlogowa-estella-6740874a0835-spot-light',
            
            light_source:       'lib/models/6420874A0963/light_source.json',
            baza:               'lib/models/6420874A0963/baza.json',
            silver_clips:       'lib/models/6420874A0963/silver_clips.json',
            light_bulb:         'lib/models/6420874A0963/light_bulb.json',
            top:                'lib/models/6420874A0963/top.json',
            top_inside:         'lib/models/6420874A0963/top_inside.json',
            rope:               'lib/models/6420874A0963/rope.json',
            legs:               'lib/models/6420874A0963/legs.json',
            scala:              0.3,
            posiy:             -14,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.topper;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0xf2f2f2,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = false;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ],
    [
        _6420174A0965 = {
            name: 'Lampa podłogowa Estella 6740874A0835 Spot Light',
            link: 'https://lightcenter.pl/katalog,24119/lampa-podlogowa-estella-6740874a0835-spot-light',
            
            light_source:       'lib/models/6420874A0963/light_source.json',
            baza:               'lib/models/6420874A0963/baza.json',
            silver_clips:       'lib/models/6420874A0963/silver_clips.json',
            light_bulb:         'lib/models/6420874A0963/light_bulb.json',
            top:                'lib/models/6420874A0963/top.json',
            top_inside:         'lib/models/6420874A0963/top_inside.json',
            rope:               'lib/models/6420874A0963/rope.json',
            legs:               'lib/models/6420874A0963/legs.json',
            scala:              0.3,
            posiy:             -14,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.topperbrown;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0x775c58,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ],
    [
        _6510874A0933 = {
            name: 'Lampa podłogowa Estella 6740874A0835 Spot Light',
            link: 'https://lightcenter.pl/katalog,24119/lampa-podlogowa-estella-6740874a0835-spot-light',
            
            light_source:       'lib/models/6510874A0933/light_source.json',
            baza:               'lib/models/6510874A0933/baza.json',
            silver_clips:       'lib/models/6510874A0933/silver_clips.json',
            light_bulb:         'lib/models/6510874A0933/light_bulb.json',
            top:                'lib/models/6510874A0933/top.json',
            top_inside:         'lib/models/6510874A0933/top_inside.json',
            rope:               'lib/models/6510874A0933/rope.json',
            legs:               'lib/models/6510874A0933/legs.json',
            scala:              0.8,
            posiy:             -9,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.topdense;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0xf1f1f1,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ],
    [
        _6510874A0933 = {
            name: 'Lampa podłogowa Estella 6740874A0835 Spot Light',
            link: 'https://lightcenter.pl/katalog,24119/lampa-podlogowa-estella-6740874a0835-spot-light',
            
            light_source:       'lib/models/6510874A0933/light_source.json',
            baza:               'lib/models/6510874A0933/baza.json',
            silver_clips:       'lib/models/6510874A0933/silver_clips.json',
            light_bulb:         'lib/models/6510874A0933/light_bulb.json',
            top:                'lib/models/6510874A0933/top.json',
            top_inside:         'lib/models/6510874A0933/top_inside.json',
            rope:               'lib/models/6510874A0933/rope.json',
            legs:               'lib/models/6510874A0933/legs.json',
            scala:              0.8,
            posiy:             -9,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.topdensebrown;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0x775c58,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ],
    [
        _6740874A0963 = {
            name: 'Lampa podłogowa Estella 6740874A0963 Spot Light',
            link: 'https://lightcenter.pl/katalog,24119/lampa-podlogowa-estella-6740874a0835-spot-light',
            
            light_source:       'lib/models/6740874A0963/light_source.json',
            baza:               'lib/models/6740874A0963/baza.json',
            silver_clips:       'lib/models/6740874A0963/silver_clips.json',
            light_bulb:         'lib/models/6740874A0963/light_bulb.json',
            top:                'lib/models/6740874A0963/top.json',
            top_inside:         'lib/models/6740874A0963/top_inside.json',
            rope:               'lib/models/6740874A0963/rope.json',
            legs:               'lib/models/6740874A0963/legs.json',
            rope:               'lib/models/6740874A0963/rope.json',
            scala:              0.3,
            posiy:             -12,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.pilne;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0xf1f1f1,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
                });
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ],
    [
        _6740174A0965 = {
            name: 'Lampa podłogowa 6740174A0965',
            link: 'https://lightcenter.pl/katalog,24119/lampa-podlogowa-estella-6740874a0835-spot-light',
            
            light_source:       'lib/models/6740874A0963/light_source.json',
            baza:               'lib/models/6740874A0963/baza.json',
            silver_clips:       'lib/models/6740874A0963/silver_clips.json',
            light_bulb:         'lib/models/6740874A0963/light_bulb.json',
            top:                'lib/models/6740874A0963/top.json',
            top_inside:         'lib/models/6740874A0963/top_inside.json',
            rope:               'lib/models/6740874A0963/rope.json',
            legs:               'lib/models/6740874A0963/legs.json',
            rope:               'lib/models/6740874A0963/rope.json',
            scala:              0.3,
            posiy:             -12,
            modposi: function(){
                group.scale.set( this.scala, this.scala, this.scala );
                group.position.y = this.posiy;
            },
            
            loadmodel: function () {

                var arrs = '<a href="'+ this.link +'" target="_blank" >'+ this.name +'</a>';
                model_name.html( arrs );

                var t = textures.texture;
                var tx = tx_loader.load(t);
                
                var b = textures.bumptexture;
                var e = textures.matemissive;
                var rr = textures.red_rope;
                
                var jas = textures.pilnebrown;
                var jx = tx_loader.load(jas);
                

                var mat = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var matjas = new THREE.MeshPhongMaterial({
                    map: tx,
                    shininess: 0,
                    reflectivity: 0,
                    bumpMap: b,
                    bumpScale: .002,
                    combine: THREE.MultiplyOperation
                });
                
                var brag = new THREE.CubeTextureLoader()
                    .setPath('lib/core/environment/yokohama/')
                    .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
                brag.mapping = THREE.CubeRefractionMapping;

                var matBulb = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    envMap: brag,
                    refractionRatio: 0.05,
                    transparent: true,
                    reflectivity: 0.6,
                    opacity: .5,
                    specular: 0xffffff,
                });
                var silver_material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    refractionRatio: 0.05,
                    reflectivity: 0.6,
                    envMap: brag,
                    side: THREE.DoubleSide
                });
                var abaz = new THREE.MeshPhongMaterial({
                    map: jx,
                    shininess: 0,
                    reflectivity: 0,
                    combine: THREE.MultiplyOperation
                });
                
                var abazin = new THREE.MeshBasicMaterial({
                    color: 0x775c58,
                    shininess: 0,
                    refractionRatio: 0.02,
                    reflectivity: .01,
                    side: THREE.DoubleSide,
                    envMap: brag
                });
                
                
                loader.load(this.light_source, function (geo) {
                    var light_source = new THREE.Mesh(geo, e);
                    light_source.material.needsUpdate = true;
                    light_source.position.set(0, 0, 0);
                    light_source.scale.set(mscale, mscale, mscale);
                    light_source.name = 'light';
                    group.add(light_source);
                });
                loader.load(this.light_bulb, function (geo) {
                    var light_bulb = new THREE.Mesh(geo, matBulb);
                    light_bulb.material.needsUpdate = true;
                    light_bulb.position.set(0, 0, 0);
                    light_bulb.scale.set(mscale, mscale, mscale);
                    light_bulb.castShadow = true;
                    light_bulb.receiveShadow = true;
                    light_bulb.name = 'light_bulb';
                    group.add(light_bulb);
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
                loader.load(this.legs, function (geo) {
                    var legs = new THREE.Mesh(geo, mat);
                    legs.material.needsUpdate = true;
                    legs.position.set(0, 0, 0);
                    legs.scale.set(mscale, mscale, mscale);
                    legs.castShadow = true;
                    legs.receiveShadow = true;
                    legs.name = 'legs';
                    group.add(legs);
                });
                loader.load(this.rope, function (geo) {
                    var rope = new THREE.Mesh(geo, rr);
                    rope.material.needsUpdate = true;
                    rope.position.set(0, 0, 0);
                    rope.scale.set(mscale, mscale, mscale);
                    rope.castShadow = true;
                    rope.receiveShadow = true;
                    rope.name = 'rope';
                    group.add(rope);
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
                loader.load(this.top, function (geo) {
                    var top = new THREE.Mesh(geo, abaz);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load(this.top_inside, function (geo) {
                    var top_inside = new THREE.Mesh(geo, abazin);
                    top_inside.material.needsUpdate = true;
                    top_inside.position.set(0, 0, 0);
                    top_inside.scale.set(mscale, mscale, mscale);
                    top_inside.castShadow = true;
                    top_inside.receiveShadow = true;
                    top_inside.name = 'top_inside';
                    group.add(top_inside);
                });

            }

        }
    ]
]