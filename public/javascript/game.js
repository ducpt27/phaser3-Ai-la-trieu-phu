const config = {
    width: 1920,
    height: 980,
    backgroundColor: 0x000000,
    scene: [MainScene, PlayScene, MenuScene, ResultScene],
    font: '26px Arial',
    fontSize: 26,
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 980
    },
};
console.log(config.font)
const game = new Phaser.Game(config);