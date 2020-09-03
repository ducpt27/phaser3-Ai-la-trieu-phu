class AbsTextWrapper {
    data = [];
    component;
    scene;
    x = 0;
    y = 0;
    dataStyle = {};

    constructor(scene, x, y, dataStyle, data) {
        this.data = data;
        this.x = x;
        this.y = y;
        this.scene = scene;
        this.dataStyle = dataStyle;
    }

    load(data) {
        this.destroy();
        if (data != null) {
            this.data = data;
        }
    }

    destroy() {
        if (this.component != null && this.component instanceof Phaser.GameObjects.Text) {
            this.component.destroy();
        }
    }
}