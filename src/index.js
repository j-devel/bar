
const SDK = window.requirejs('w3reality-sdk');
// console.log('SDK:', SDK);

class App extends SDK.App {
    // override
    static createWorld() {
        const world = new World(8, 8, 8);
        world.createFlatWorld(2, BLOCK.GLASS);
        world.setSpawnPose([4.0, 1.5, 8, -Math.PI/16, -Math.PI/2, 0]);
        return world;
    }

    // override
    constructor(data, name="bar") {
        super(data, name);
        this.set_block(0, 0, 6, BLOCK.MODEL_TEST);

        // window.THREE is available
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(1, 1, 4);
        this.cube = cube;
        const scene = new THREE.Scene();
        scene.add(cube);
        this.setScene(scene); // the scene set is auto cleared on free()
    }

    // override
    update() {
        super.update();

        const t = window.performance.now() / 1000.;
        // console.log('t:', t);
        this.cube.rotation.x = Math.PI/2 * t;
    }

    // override
    free() {
        super.free();
    }
}

export default App;
