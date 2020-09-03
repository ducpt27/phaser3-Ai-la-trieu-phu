class AnswerText extends Phaser.GameObjects.Text {

    constructor(scene, x, y, data, dataStyle) {
        super(scene, x, y, data, {
            "font": config.fontSize + 2 + 'px Arial',
            "fill": 'white',
            "wordWrap": {"width": dataStyle["maxWidth"] - 40},
            "align": 'left',
            "backgroundColor": dataStyle["bgColor"],
            "fixedWidth": dataStyle["maxWidth"],
            "padding": {
                "left": 20,
                "top": 20,
                "right": 20,
                "bottom": 20
            },
            "maxLines": 2,
        });
        scene.add.existing(this);
    }
}