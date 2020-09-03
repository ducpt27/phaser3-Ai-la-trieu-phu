class TimerText extends Phaser.GameObjects.Text {
    constructor(scene, x, y, data, dataStyle) {
        super(scene, x, y, data, {
            font: config.fontSize + 'px Arial',
            fill: 'white',
        });
        scene.add.existing(this);
    }
}