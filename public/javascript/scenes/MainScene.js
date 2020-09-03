class MainScene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.spritesheet("background", "/images/bg-1920x1080.jpg", {
            frameWidth: 1920,
            frameHeight: 1080
        });
    }

    create() {
        this.background = this.add.sprite(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.add.text(20, 20, "Loading game...", {
            font: config.font,
            fill: "coral"
        });
        this.scene.start("menuGame");
    }
}