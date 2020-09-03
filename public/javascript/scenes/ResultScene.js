class ResultScene extends Phaser.Scene {

    constructor() {
        super("resultGame");
        console.log(this);
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
    }
}