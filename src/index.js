
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
    constructor(data, name="super") {
        super(data, name);
        this.set_block(0, 0, 6, BLOCK.MODEL_TEST);
        this.say('welcome');
    }

    // override
    update() {
        super.update();
    }

    // override
    free() {
        super.free();
    }
}

export default App;
