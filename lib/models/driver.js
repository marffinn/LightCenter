var models = [
    
    [ // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        linus = {
            light_source    : 'lib/models/2238174/light_source.json',
            top             : 'lib/models/2238174/top.json',
            bottom          : 'lib/models/2238174/baza.json',
            texture         : 'lib/models/2238174/topjpg.jpg',
            bumptexture     : 'lib/models/2238174/pobrane.png',
            matemissive     : new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
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
    ], // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    [ // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        linus_double = {
            light_source    : 'lib/models/2237174/light_source.json',
            top             : 'lib/models/2237174/top.json',
            bottom          : 'lib/models/2237174/baza.json',
            texture         : 'lib/models/2237174/topjpg.jpg',
            bumptexture     : 'lib/models/2237174/pobrane.png',
            matemissive     : new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
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
                
            }
            
        }
    ], // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    [ // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        linus_sufit = {
            light_source    : 'lib/models/2246274/light_source.json',
            top             : 'lib/models/2246274/top.json',
            bottom          : 'lib/models/2246274/baza.json',
            texture         : 'lib/models/2246274/topjpg.jpg',
            bumptexture     : 'lib/models/2246274/pobrane.png',
            matemissive     : new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
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
    ], // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    [ // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        linus_sufit = {
            light_source    : 'lib/models/2247474/light_source.json',
            top             : 'lib/models/2247474/top.json',
            bottom          : 'lib/models/2247474/baza.json',
            texture         : 'lib/models/2247474/topjpg.jpg',
            bumptexture     : 'lib/models/2247474/pobrane.png',
            matemissive     : new THREE.MeshPhongMaterial({
                color: 0xa3a3a3,
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
    ] // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
]