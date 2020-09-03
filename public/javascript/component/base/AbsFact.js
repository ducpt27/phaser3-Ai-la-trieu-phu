class AbsFact {
    scene;
    components = [];
    data = [];
    x = 0;
    y = 0;
    constructor(scene, data, x, y) {
        this.scene = scene;
        if (data !== null) {
            this.data = data;
        }
        if (x !== null) {
            this.x = x;
        }
        if (y !== null) {
            this.y = y;
        }
    }

    load(data) {
        if (data !== null) {
            this.data = data;
        }
        if (this.components.length !== 0) {
            this.destroy();
        }
    };

    destroy() {
        for (let i = 0; i < this.components.length; i++) {
            this.components[i].destroy();
        }
    }
}