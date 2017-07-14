var models = [
    
    [
        linus = {
            light_source    : 'lib/models/Linus/light_source.json',
            top             : 'lib/models/Linus/top.json',
            bottom          : 'lib/models/Linus/baza.json',
            texture         : 'lib/models/Linus/topjpg.jpg',
            bumptexture     : 'lib/models/Linus_double/pobrane.png',
            matemissive     : new THREE.MeshPhongMaterial({
                color: 0xCCCCCC,
                emissive: 0x000000
            }),
            
            loadmodel: function(){
                
                group.remove( top );
                
                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load( t );
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
                loader.load( this.top , function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load( this.bottom , function (geo) {
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
        linus_double = {
            light_source    : 'lib/models/Linus_double/light_source.json',
            top             : 'lib/models/Linus_double/top.json',
            bottom          : 'lib/models/Linus_double/baza.json',
            texture         : 'lib/models/Linus_double/topjpg.jpg',
            bumptexture     : 'lib/models/Linus_double/pobrane.png',
            matemissive     : new THREE.MeshPhongMaterial({
                color: 0xCCCCCC,
                emissive: 0x000000
            }),
            
            loadmodel: function(){
                
                group.remove( top );
                
                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load( t );
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
                loader.load( this.top , function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load( this.bottom , function (geo) {
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
    ], // end of linus double
    
    [
        linus_double = {
            light_source    : 'lib/models/Linus_double/light_source.json',
            top             : 'lib/models/Linus_double/top.json',
            bottom          : 'lib/models/Linus_double/baza.json',
            texture         : 'lib/models/Linus_double/topjpg.jpg',
            bumptexture     : 'lib/models/Linus_double/pobrane.png',
            matemissive     : new THREE.MeshPhongMaterial({
                color: 0xCCCCCC,
                emissive: 0x000000
            }),
            
            loadmodel: function(){
                
                group.remove( top );
                
                var t = this.texture;
                var b = this.bumptexture;
                var e = this.matemissive;
                var tx = tx_loader.load( t );
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
                loader.load( this.top , function (geo) {
                    var top = new THREE.Mesh(geo, mat);
                    top.material.needsUpdate = true;
                    top.position.set(0, 0, 0);
                    top.scale.set(mscale, mscale, mscale);
                    top.castShadow = true;
                    top.receiveShadow = true;
                    top.name = 'top';
                    group.add(top);
                });
                loader.load( this.bottom , function (geo) {
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
    ]
    
    
]